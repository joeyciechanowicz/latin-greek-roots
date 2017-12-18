(function() {
  // Fill in the data here that you got from extract-data
  const a=[];
  const h=[];
  const p=[];

  const allRoots = [...a, ...h, ...p];

  let prevLetter = '';

  const letterLookups = allRoots.map(x => ({
    ...x,
    letter: x.roots[0][0] === '-' ? x.roots[0][1].toLowerCase() : x.roots[0][0].toLowerCase()
  })).reduce((acc, curr, idx) => {
    if (prevLetter !== curr.letter) {
      if (prevLetter !== '') {
        acc[prevLetter]['end'] = idx - 1;
      }
      acc[curr.letter] = { start: idx };
      prevLetter = curr.letter;
    } else if (idx === allRoots.length - 1) {
      acc[prevLetter]['end'] = idx;
    }

    return acc;
  }, {a: {start: 0}});

  const trie = {};

  allRoots.forEach((x, idx) => {
    x.roots.map(y => y.replace(/\-/g, '').toLowerCase())
      .forEach(y => addRootToTree(y, idx));
  });

  function addRootToTree(root, index) {
    let rootIndex = 0;
    let node = trie;
    while (rootIndex !== root.length) {
      const letter = root[rootIndex];
      if (node[letter]) {
        node = node[letter];
      } else {
        node[letter] = {};
        node = node[letter];
      }

      rootIndex++;
    }

    if (node['$r']) {
      node['$r'].push(index);
    } else {
      node['$r'] = [index];
    }
  }

  const data = allRoots.map(x => ({
    r: x.roots,
    m: x.meaning,
    o: x.originLanguage === 'Latin' ? 0 : 1,
    e: x.examples
  }));

  const result = {
    listing: data,
    trie, trie,
    letters: letterLookups,
    languages: [
      {
        lang: 'Latin',
        code: 0
      },
      {
        lang: 'Greek',
        code: 1
      }
    ],
    format: ['roots', 'meaning', 'originLanguage', 'examples']
  }

  copy(`
        export const rootData = ${JSON.stringify(data)};
        export const trieData = ${JSON.stringify(trie)};
        export const lettersOffsets = ${JSON.stringify(letterLookups)};
        export const languages = ${JSON.stringify(result.languages)};
        export const rootDataFormat = ${JSON.stringify(result.languages)};
    `);
})();

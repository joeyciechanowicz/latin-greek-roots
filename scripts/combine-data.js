(function() {
  // Fill in the data here that you got from extract-data
  const a=[];
  const h=[];
  const p=[];

  const combined = [...a, ...h, ...p];

  const updated = combined.map(x => ({
    ...x,
    letter: x.roots[0][0] === '-' ? x.roots[0][1].toLowerCase() : x.roots[0][0].toLowerCase()
  })).reduce((acc, curr) => {
    if (!acc[curr.letter]) acc[curr.letter] = [];
    acc[curr.letter].push({
      roots: curr.roots,
      meaning: curr.meaning,
      originLanguage: curr.originLanguage,
      examples: curr.examples
    });
    return acc;
  }, {});


  copy(JSON.stringify(updated));
})();

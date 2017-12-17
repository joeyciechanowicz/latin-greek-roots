(function() {
    // Add map in to NodeList for convenience
    NodeList.prototype.map = function(cb) {
      return Array.from(this).map(cb);
    }

    const rows = document.querySelectorAll('.wikitable.sortable tbody tr')
      .map(x => x.cells)
  .map(x => ({
      roots: x[0],
      meaning: x[1],
      originLanguage: x[2],
      examples: x[4]
    }))
  .filter(x => x.meaning && x.examples)
  .map(x => ({
      ...x,
      meaning: x.meaning.innerText,
      originLanguage: x.originLanguage.innerText,
      roots: x.roots.querySelectorAll('b').map(y => y.innerText),
    examples: x.examples.innerText.split(',').map(y => y.trim())
  }));

    copy(JSON.stringify(rows));
  }
)();

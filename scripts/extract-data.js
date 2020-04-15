#!/usr/bin/env node

const {JSDOM} = require('jsdom');

async function extractData(url) {
	// Add map in to NodeList for convenience
	NodeList.prototype.map = function (cb) {
		return Array.from(this).map(cb);
	};

	const dom = await JSDOM.fromURL(url);

	return [...dom.document.querySelectorAll('.wikitable.sortable tbody tr')]
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
}

async function extractAllData() {
	const aToG = await extractData('https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/A-G');
	// const hToO = await extractData('https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/H-O');
	// const pToZ = await extractData('https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/P-Z');

	return aToG;
}

extractAllData()
	.then(console.log)
	.catch(console.error);

#!/usr/bin/env node
const fs = require('fs');
const {promisify} = require('util');
const {JSDOM} = require('jsdom');
const writeFile = promisify(fs.writeFile);

async function extractWikipediaData(url) {
	const dom = await JSDOM.fromURL(url);

	return [...dom.window.document.querySelectorAll('.wikitable.sortable tbody tr')]
		.map(row => row.cells)
		.map(row => ({
			roots: row[0],
			meaning: row[1],
			originLanguage: row[2],
			etymology: row[3],
			examples: row[4]
		}))
		.filter(row => row.meaning && row.meaning.textContent && row.examples && row.examples.textContent)
		.map(row => ({
			roots: [...row.roots.querySelectorAll('b')].map(y => y.textContent.toLowerCase().trim()),
			meaning: row.meaning.textContent,
			originLanguage: row.originLanguage.textContent,
			etymology: row.etymology.textContent,
			examples: row.examples.textContent.split(',').map(y => y.trim())
		}))
		// Ignore rows that don't have a meaning and examples column (such as the repeated header row)
		.filter(row => row.roots.length > 0)
}

async function extractAllData() {
	const aToG = await extractWikipediaData('https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/A-G');
	const hToO = await extractWikipediaData('https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/H-O');
	const pToZ = await extractWikipediaData('https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/P-Z');

	return aToG.concat(hToO).concat(pToZ);
}

async function buildSearchIndex(rows) {
	const trie = {};

	rows.forEach((row, index) => {
		row.roots
			.map(root => root.replace(/-/g, '').toLowerCase())
			.forEach(root => addWordToTrie(root, index));

		row.examples
			.map(meaning => meaning.toLowerCase())
			.forEach(meaning => addWordToTrie(meaning, index));
	});

	/**
	 *
	 * @param word a word to add
	 * @param index index of the word within array of rows
	 */
	function addWordToTrie(word, index) {
		if (word.indexOf('_') !== -1) {
			throw new Error(`The word contains an underscore: ${word}`)
		}

		// Iterate each letter of our root, using it to walk the trie and locate
		// the final node where we can add this root
		const node = [...word].reduce((node, letter) => {
			if (!node[letter]) {
				node[letter] = {};
			}

			return node[letter];
		}, trie);

		if (node._ && !node._.includes(index)) {
			node._.push(index);
		} else {
			node._ = [index];
		}
	}

	return trie;
}

function serialize(data, filename) {
	return writeFile(filename, JSON.stringify(data))
}

async function run() {
	const rows = await extractAllData();
	const trie = await buildSearchIndex(rows);

	await serialize(trie, 'public/trie.json');
	await serialize(rows, 'public/rows.json');
}

run()
	.then(() => console.log('Completed'))
	.catch(console.error);

import {Row, TrieNode} from './types';

import {

} from './actions';
import {AppThunk} from '../../store';

export const loadTrie = (): AppThunk => async (dispatch) => {
	dispatch();

	try {
		const data = await fetch('/trie.json');
		const trie = await data.json() as TrieNode;

		dispatch(loadTrieAsync.success(trie));
	} catch (e) {
		dispatch(loadTrieAsync.failure('Unable to load trie'));
	}
};

export const loadRows = (): AppThunk => async (dispatch) => {
	dispatch(loadRowsAsync.request());

	try {
		const data = await fetch('/rows-unminified.json');
		const rows = await data.json() as Row[];

		// Add an index so we can provide a key in our view
		rows.forEach((row, index) => row.index = index);
		dispatch(loadRowsAsync.success(rows));
	} catch (e) {
		dispatch(loadRowsAsync.failure('Unable to load rows'));
	}
};

export const search = (searchTerm: string): AppThunk => async (dispatch, getState) => {
	dispatch(searchAsync.request(searchTerm));

	// Enqueue a microtask
	return new Promise<void>(resolve => {
			const {trie} = getState().roots;

			if (!trie) return [];

			let currentNode: TrieNode = trie;
			for (let i = 0; i < searchTerm.length; i++) {
				const letter = searchTerm[i];

				if (currentNode[letter]) {
					currentNode = currentNode[letter];
				} else {
					dispatch(searchAsync.success([]));
					resolve();
				}
			}

			const results: number[] = currentNode._;

			console.log('results before reduce', results);

			// Now we walk the trie from this point and add all other roots we find
			const reduce = (node: TrieNode): number[] => {
				return node._.concat(
					Object.keys(node).reduce<number[]>((acc, curr) => {
						if (curr === '_') return acc;
						return acc.concat(reduce(node[curr]));
					}, [])
				);
			};

			const additions = reduce(currentNode);
			console.log('additions', additions);

			dispatch(searchAsync.success(additions));
			resolve();
		}
	);
};

import {Row, TrieNode} from './types';

import {
	loadRowsFailure,
	loadRowsRequest,
	loadRowsSuccess,
	loadTrieFailure,
	loadTrieRequest,
	loadTrieSuccess, paginateChangePage,
	searchRequest,
	searchSuccess
} from './actions';
import {AppThunk} from '../../store';

export const loadTrie = (): AppThunk => async (dispatch, getState) => {
	dispatch(loadTrieRequest());

	try {
		const data = await fetch('/trie.json');
		const trie = await data.json() as TrieNode;

		dispatch(loadTrieSuccess(trie));
	} catch (e) {
		dispatch(loadTrieFailure('Unable to load trie'));
	}
};

export const loadAllRows = (): AppThunk => async (dispatch, getState) => {
	// We don't show we're loading when the state has been prefilled
	if (getState().roots.rows.paginated.current.length === 0) {
		dispatch(loadRowsRequest());
	}

	try {
		const data = await fetch('/rows.json');
		const rows = await data.json() as Row[];

		// Add an index so we can provide a key in our view
		rows.forEach((row, index) => row.index = index);
		dispatch(loadRowsSuccess(rows));
	} catch (e) {
		dispatch(loadRowsFailure('Unable to load rows'));
	}
};

const walk = (set: Set<number>, node: TrieNode): void => {
	if (node._) {
		node._.forEach(index => set.add(index));
	}

	for (const key in node) {
		if (key === '_') {
			continue;
		}

		walk(set, node[key]);
	}
};
export const search = (searchTerm: string): AppThunk => async (dispatch, getState) => {
	dispatch(searchRequest());

	// Enqueue a microtask
	return new Promise<void>(resolve => {
			const {rootNode} = getState().roots.trie;

			if (rootNode === undefined) {
				dispatch(searchSuccess([]));
				return resolve();
			}

			let currentNode: TrieNode = rootNode;
			for (let i = 0; i < searchTerm.length; i++) {
				const letter = searchTerm[i];

				if (currentNode[letter]) {
					currentNode = currentNode[letter];
				} else {
					dispatch(searchSuccess([]));
					return resolve();
				}
			}

			// Now we walk the trie from this point and add all other roots we find
			const indicies = new Set<number>();
			walk(indicies, currentNode);

			dispatch(searchSuccess(Array.from(indicies)));
			resolve();
		}
	);
};

export const setPaginationPage = (page: number): AppThunk => async (dispatch, getState) => {
	const {totalPages} = getState().roots.rows.paginated;

	if (page < 0 || page >= totalPages) {
		return;
	}

	dispatch(paginateChangePage(page));
};



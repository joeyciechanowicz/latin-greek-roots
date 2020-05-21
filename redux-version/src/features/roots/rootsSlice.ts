import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

type TrieNode = {
	/**
	 * List of indexes that match this path in the trie
	 */
	// @ts-ignore
	_: number[];
	[prefix: string]: TrieNode;
}

export interface Row {
	index: number;
	roots: string[];
	meaning: string;
	originLanguage: 'Latin' | 'Greek';
	etymology: string;
	examples: string[];
}

export interface RootsState {
	loadingTrie: boolean;
	trie?: TrieNode;

	loadingRows: boolean;
	allRows: Row[];
	currentRows: Row[];
	currentRowsPage: number;

	searching: boolean;

	error: string | null;
}

const initialState: RootsState = {
	loadingTrie: false,

	loadingRows: false,
	allRows: [],
	currentRows: [],
	currentRowsPage: 0,

	searching: false,
	error: null
};

export const loadTrieAsync = createAsyncThunk(
	'roots/loadTrie',
	async (_, {rejectWithValue}) => {
		try {
			const data = await fetch('/trie.json');
			return await data.json() as TrieNode;
		} catch (e) {
			rejectWithValue('Unable to load trie json');
		}
	}
);

export const loadRowsAsync = createAsyncThunk(
	'roots/loadRows',
	async (_, {rejectWithValue, dispatch}) => {
		try {
			const data = await fetch('/rows-unminified.json');
			const rows = await data.json() as Row[];

			// Add an index so we can provide a key in our view
			rows.forEach((row, index) => row.index = index);
			return rows;
		} catch (e) {
			rejectWithValue('Unable to load rows json');
		}
	}
);

export const searchAsync = createAsyncThunk<number[], string, { state: { roots: RootsState } }>(
	'roots/search',
	(searchTerm: string, {getState}) => {
		// Enqueue a microtask
		return new Promise<number[]>(resolve => {
				const {trie} = getState().roots;

				if (!trie) return [];

				let currentNode: TrieNode = trie;
				for (let i = 0; i < searchTerm.length; i++) {
					const letter = searchTerm[i];

					if (currentNode[letter]) {
						currentNode = currentNode[letter];
					} else {
						return resolve([]);
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

				resolve(results.concat(additions));
			}
		);
	}
);

export const rootsSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		resetSearch: state => {
			state.currentRows = state.allRows;
		}
	},
	extraReducers: {
		[loadTrieAsync.pending.type]: (state, action) => {
			state.loadingTrie = true;
		},
		[loadTrieAsync.fulfilled.type]: (state, action: PayloadAction<TrieNode>) => {
			state.loadingTrie = false;
			state.trie = action.payload;
		},
		[loadTrieAsync.rejected.type]: (state, action) => {
			state.error = action.payload;
			state.loadingTrie = false;
		},

		[loadRowsAsync.pending.type]: (state, action) => {
			state.loadingRows = true;
		},
		[loadRowsAsync.fulfilled.type]: (state, action: PayloadAction<Row[]>) => {
			state.loadingRows = false;
			state.allRows = action.payload;
			state.currentRows = action.payload;
		},
		[loadRowsAsync.rejected.type]: (state, action) => {
			state.error = action.payload;
			state.loadingRows = false;
		},

		[searchAsync.pending.type]: (state, action) => {
			state.searching = true;
		},
		[searchAsync.fulfilled.type]: (state, action: PayloadAction<number[]>) => {
			state.searching = false;

			state.currentRows = action.payload.map(index => state.allRows[index]);
		},
		[searchAsync.rejected.type]: (state, action) => {
			state.error = action.payload;
			state.searching = false;
		}
	}
});

export const {resetSearch} = rootsSlice.actions;


export default rootsSlice.reducer;

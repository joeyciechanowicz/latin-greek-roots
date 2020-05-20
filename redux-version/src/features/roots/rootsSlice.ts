import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

type TrieNode = {
	/**
	 * List of indexes that are match this path in the trie
	 */
	// @ts-ignore
	_: number[];
	[prefix: string]: TrieNode;
}

interface Row {
	roots: string[];
	meaning: string;
	originLanguage: 'Latin' | 'Greek';
	etymology: string;
	examples: string[];
}

interface RootsState {
	loadingTrie: boolean;
	trie?: TrieNode;

	loadingRows: boolean;
	rows?: Row[];

	searching: boolean;

	error: string | null;
}

const initialState: RootsState = {
	loadingTrie: false,
	loadingRows: false,
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
	async (_, {rejectWithValue}) => {
		try {
			const data = await fetch('/rows-unminified.json');
			return await data.json() as Row[];
		} catch (e) {
			rejectWithValue('Unable to load rows json');
		}
	}
);

export const searchAsync = createAsyncThunk(
	'roots/search',
	async (searchTerm: string, __) => {
		return '';
	}
);

export const rootsSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers: {
		[loadTrieAsync.pending.type]: (state, action) => {
			state.loadingTrie = true;
		},
		[loadTrieAsync.fulfilled.type]: (state, action) => {
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
		[loadRowsAsync.fulfilled.type]: (state, action) => {
			state.loadingRows = false;
			state.rows = action.payload;
		},
		[loadRowsAsync.rejected.type]: (state, action) => {
			state.error = action.payload;
			state.loadingRows = false;
		}

	}
});

// export const {
//
// } = rootsSlice.actions;


export default rootsSlice.reducer;

import {combineReducers} from 'redux';

import {
	LOAD_ROWS_FAILURE,
	LOAD_ROWS_REQUEST,
	LOAD_ROWS_SUCCESS, LOAD_TRIE_FAILURE,
	LOAD_TRIE_REQUEST,
	LOAD_TRIE_SUCCESS,
	RootsActions,
	RowsState, SEARCH_REQUEST,
	SEARCH_SUCCESS,
	TrieState
} from './types';

const initialTrieState: TrieState = {
	loading: false
};

const initialRowsState: RowsState = {
	current: [],
	all: [],
	loading: false
};

export const rootsReducer = combineReducers({
	rows(state: RowsState = initialRowsState, action: RootsActions): RowsState {
		switch (action.type) {
			case LOAD_ROWS_REQUEST:
				return {
					...state,
					loading: true
				};
			case LOAD_ROWS_SUCCESS:
				return {
					...state,
					loading: false,
					all: action.payload,
					current: action.payload
				};
			case LOAD_ROWS_FAILURE:
				return {
					...state,
					loading: false,
					error: action.payload
				};
			case SEARCH_SUCCESS:
				return {
					...state,
					current: action.payload.map(index => state.all[index])
				};
			default:
				return state;
		}
	},
	trie(state: TrieState = initialTrieState, action: RootsActions) {
		switch (action.type) {
			case LOAD_TRIE_REQUEST:
				return {
					...state,
					loading: true
				};
			case LOAD_TRIE_SUCCESS:
				return {
					...state,
					loading: false,
					rootNode: action.payload
				};
			case LOAD_TRIE_FAILURE:
				return {
					...state,
					loading: false,
					error: action.payload
				};

			default:
				return state;
		}
	},
	searching(state: boolean = false, action: RootsActions) {
		switch (action.type) {
			case SEARCH_REQUEST:
				return true;
			case SEARCH_SUCCESS:
				return false;
			default:
				return state;
		}
	}
});

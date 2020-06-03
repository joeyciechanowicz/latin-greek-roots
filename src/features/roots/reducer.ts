import {combineReducers} from 'redux';

import {
	LOAD_ROWS_FAILURE,
	LOAD_ROWS_REQUEST,
	LOAD_ROWS_SUCCESS,
	LOAD_TRIE_FAILURE,
	LOAD_TRIE_REQUEST,
	LOAD_TRIE_SUCCESS,
	PAGINATE_CHANGE_PAGE,
	RESET_SEARCH,
	RootsActions,
	RowsState,
	SEARCH_REQUEST,
	SEARCH_SUCCESS,
	TrieState
} from './types';

export const initialTrieState: TrieState = {
	loading: false
};

export const initialRowsState: RowsState = {
	all: [],
	loading: false,
	paginated: {
		data: [],
		current: [],
		currentPage: 0,
		totalPages: 0
	}
};

export const PAGINATION_AMOUNT = 50;

export const rootsReducer = combineReducers({
	rows: (state: RowsState = initialRowsState, action: RootsActions): RowsState => {
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
					paginated: {
						...state.paginated,
						currentPage: 0,
						totalPages: Math.ceil(action.payload.length / PAGINATION_AMOUNT),
						current: action.payload.slice(0, PAGINATION_AMOUNT),
						data: action.payload
					}
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
					paginated: {
						...state.paginated,
						currentPage: 0,
						totalPages: Math.ceil(action.payload.length / PAGINATION_AMOUNT),
						current: action.payload.slice(0, PAGINATION_AMOUNT).map(i => state.all[i]),
						data: action.payload.map(i => state.all[i])
					}
				};
			case RESET_SEARCH:
				return {
					...state,
					paginated: {
						...state.paginated,
						currentPage: 0,
						totalPages: Math.ceil(state.all.length / PAGINATION_AMOUNT),
						current: state.all.slice(0, PAGINATION_AMOUNT),
						data: state.all
					}
				};
			case PAGINATE_CHANGE_PAGE:
				return {
					...state,
					paginated: {
						...state.paginated,
						currentPage: action.payload,
						current: state.paginated.data.slice(action.payload * PAGINATION_AMOUNT, (action.payload + 1) * PAGINATION_AMOUNT)
					}
				}
			default:
				return state;
		}
	},
	trie: (state: TrieState = initialTrieState, action: RootsActions) => {
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
	searching: (state: boolean = false, action: RootsActions) => {
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

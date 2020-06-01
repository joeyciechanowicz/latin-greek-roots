import {
	LOAD_ROWS_FAILURE,
	LOAD_ROWS_REQUEST,
	LOAD_ROWS_SUCCESS,
	LOAD_TRIE_FAILURE,
	LOAD_TRIE_REQUEST,
	LOAD_TRIE_SUCCESS,
	RESET_SEARCH,
	Row,
	SEARCH_REQUEST,
	SEARCH_SUCCESS,
	TrieNode
} from './types';

/**
 * Returns a function that will resolve to an action creator for type & payload
 * The return function is needed so that we can avoid having to pass TType, TPayload when TType can be inferred
 * from the first function call
 * @param type
 */
function createActionCreator<TType>(type: TType): <TPayload = undefined>() => (payload?: TPayload) => Action<TType, TPayload> {
	return <TPayload>() => {
		return (payload?: TPayload) => ({
			type, payload
		} as Action<TType, TPayload>);
	};
}

interface Action<TType, TPayload> {
	type: TType;
	payload: TPayload;
}

export const loadTrieRequest = createActionCreator(LOAD_TRIE_REQUEST)();
export const loadTrieSuccess = createActionCreator(LOAD_TRIE_SUCCESS)<TrieNode>();
export const loadTrieFailure = createActionCreator(LOAD_TRIE_FAILURE)<string>();

export const loadRowsRequest = createActionCreator(LOAD_ROWS_REQUEST)();
export const loadRowsSuccess = createActionCreator(LOAD_ROWS_SUCCESS)<Row[]>();
export const loadRowsFailure = createActionCreator(LOAD_ROWS_FAILURE)<string>();

export const searchRequest = createActionCreator(SEARCH_REQUEST)();
export const searchSuccess = createActionCreator(SEARCH_SUCCESS)<number[]>();

export const resetSearch = createActionCreator(RESET_SEARCH)();

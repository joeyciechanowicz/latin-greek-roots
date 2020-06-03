import {Action as ReduxAction} from 'redux';

export type TrieNode = {
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

export interface Pagination<T> {
	data: T[];
	current: T[];
	currentPage: number;
	totalPages: number;
}

export interface RowsState {
	all: Row[];
	error?: string;
	loading: boolean;
	paginated: Pagination<Row>;
}

export interface TrieState {
	loading: boolean;
	error?: string;
	rootNode?: TrieNode;
}

export const LOAD_TRIE_SUCCESS = 'LOAD_TRIE_SUCCESS';
export const LOAD_TRIE_FAILURE = 'LOAD_TRIE_FAILURE';
export const LOAD_TRIE_REQUEST = 'LOAD_TRIE_REQUEST';

export const LOAD_ROWS_REQUEST = 'LOAD_ROWS_REQUEST';
export const LOAD_ROWS_SUCCESS = 'LOAD_ROWS_SUCCESS';
export const LOAD_ROWS_FAILURE = 'LOAD_ROWS_FAILURE';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const RESET_SEARCH = 'RESET_SEARCH';

export const PAGINATE_CHANGE_PAGE = 'PAGINATE_CHANGE_PAGE';

interface Action<TType extends string, TPayload = undefined> extends ReduxAction<TType> {
	type: TType;
	payload: TPayload;
}

interface ResetSearchAction extends Action<typeof RESET_SEARCH> {
}

interface SearchRequestAction extends Action<typeof SEARCH_REQUEST> {
}

interface SearchSuccessAction extends Action<typeof SEARCH_SUCCESS, number[]> {
}

interface LoadTrieRequestAction extends Action<typeof LOAD_TRIE_REQUEST> {
}

interface LoadTrieSuccessAction extends Action<typeof LOAD_TRIE_SUCCESS, TrieNode> {
}

interface LoadTrieFailureAction extends Action<typeof LOAD_TRIE_FAILURE, string> {
}

interface LoadRowsRequestAction extends Action<typeof LOAD_ROWS_REQUEST> {
}

interface LoadRowsSuccessAction extends Action<typeof LOAD_ROWS_SUCCESS, Row[]> {
}

interface LoadRowsFailureAction extends Action<typeof LOAD_ROWS_FAILURE, string> {
}

interface PaginateChangePage extends Action<typeof PAGINATE_CHANGE_PAGE, number> {
}

export type RootsActions =
	LoadTrieRequestAction | LoadTrieSuccessAction | LoadTrieFailureAction |
	LoadRowsRequestAction | LoadRowsSuccessAction | LoadRowsFailureAction |
	SearchRequestAction | SearchSuccessAction | ResetSearchAction |
	PaginateChangePage;

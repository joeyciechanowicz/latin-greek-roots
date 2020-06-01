import {search} from '../thunks';
import {RootState} from '../../../store';
import {initialRowsState, initialTrieState} from '../reducer';
import {SEARCH_REQUEST, SEARCH_SUCCESS, TrieNode} from '../types';

const trie: TrieNode = {
	_: [],
	a: {
		_: [],
		b: {
			_: [],
			c: {
				_: [0]
			},
			d: {
				_: [1, 2],
				e: {
					_: [3]
				},
				f: {
					_: [4],
					g: {
						_: [5]
					}
				}
			}
		}
	},
	x: {
		_: [],
		a: {
			_: [6]
		},
		b: {
			_: [6]
		}
	}
};

describe('thunks', () => {

	let rootState: RootState;
	let dispatch: jest.Mock<undefined, any>;
	let getState: jest.Mock<RootState, never>;

	beforeEach(() => {
		rootState = {
			roots: {
				searching: false,
				rows: initialRowsState,
				trie: initialTrieState
			}
		};
		dispatch = jest.fn<never, any>();
		getState = jest.fn<RootState, never>();
	});

	describe('search', () => {

		test('dispatches search starting', async () => {
			getState.mockReturnValueOnce(rootState);
			await search('search-string')(dispatch, getState, undefined);

			expect(dispatch).toHaveBeenCalledWith({type: SEARCH_REQUEST});
		});

		test('when no trie loaded dispatches an empty result', async () => {
			getState.mockReturnValueOnce(rootState);
			await search('search-string')(dispatch, getState, undefined);

			expect(dispatch).toHaveBeenCalledWith({type: SEARCH_SUCCESS, payload: []});
		});

		test('dispatches an empty result if the string search term can not be found', async () => {
			rootState.roots.trie.rootNode = trie;
			getState.mockReturnValueOnce(rootState);
			await search('abcd')(dispatch, getState, undefined);

			expect(dispatch).toHaveBeenCalledWith({type: SEARCH_SUCCESS, payload: []});
		});

		test('dispatches the results found when the search term results in a single node', async () => {
			rootState.roots.trie.rootNode = trie;
			getState.mockReturnValueOnce(rootState);
			await search('abc')(dispatch, getState, undefined);

			expect(dispatch).toHaveBeenCalledWith({type: SEARCH_SUCCESS, payload: [0]});
		});

		test('dispatches all results found by walking the trie from the end of the search term', async () => {
			rootState.roots.trie.rootNode = trie;
			getState.mockReturnValueOnce(rootState);
			await search('abd')(dispatch, getState, undefined);

			expect(dispatch).toHaveBeenCalledWith({type: SEARCH_SUCCESS, payload: [1, 2, 3, 4, 5]});
		});

		test(`doesn't return duplicate indicies when a index has two distinct paths for it`, async () => {
			rootState.roots.trie.rootNode = trie;
			getState.mockReturnValueOnce(rootState);
			await search('x')(dispatch, getState, undefined);

			expect(dispatch).toHaveBeenCalledWith({type: SEARCH_SUCCESS, payload: [6]});
		});
	});
});

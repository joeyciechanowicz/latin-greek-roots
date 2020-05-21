import {ThunkDispatch} from '@reduxjs/toolkit';
import {RootsState, searchAsync} from '../rootsSlice';

describe('searchAsync', () => {

	let thunkDispatchMock: ThunkDispatch<any, any, any>;
	let getState: jest.Mock<{ roots: RootsState }, never>;

	beforeEach(() => {
		getState = jest.fn<{ roots: RootsState }, never>().mockReturnValue({
			roots: {
				loadingTrie: false,
				loadingRows: false,
				allRows: [],
				trie: {_: []},
				currentRows: [],
				currentRowsPage: 0,
				error: null,
				searching: false
			}
		});

	});


	test('returns nothing when the state doesnt contain a trie', () => {

		const thunk = searchAsync('search string');
		const result = thunk(thunkDispatchMock, {getState }, undefined);
	});
});

import * as store from '../store.mjs';

describe('store', () => {
	let fetchMock;
	let dispatch;
	let getState;

	beforeEach(() => {
		fetchMock = jest.fn();
		dispatch = jest.fn();
		getState = jest.fn();

		global.fetch = fetchMock;
	});


	describe('actions', () => {

		describe('loadRows', () => {
			let loadRows;
			beforeEach(() => {
				loadRows = store.loadRows();
			});

			test('returns a thunk', () => {
				expect(store.loadRows()).toEqual(expect.any(Function));
			});

			test('dispatches a rows-loading action', () => {
				fetchMock.mockResolvedValueOnce(true);

				loadRows(getState, dispatch);

				expect(dispatch).toHaveBeenCalledWith({type: store.actionTypes.rowsLoading});
			});

			test('fetches the rows.json', async () => {
				const json = jest.fn();
				fetchMock.mockResolvedValueOnce({
					json
				});

				await loadRows(getState, dispatch);

				expect(fetchMock).toHaveBeenCalledWith('/rows.json');
				expect(json).toHaveBeenCalled();
			});


			test('dispatches a rows-loaded action', async () => {
				const json = jest.fn().mockResolvedValueOnce('all the rows');
				fetchMock.mockResolvedValueOnce({
					json
				});

				await loadRows(getState, dispatch);

				expect(dispatch).toHaveBeenCalledTimes(2);
				expect(dispatch).toHaveBeenLastCalledWith({
					type: store.actionTypes.rowsLoaded,
					payload: 'all the rows'
				});
			});

			test('dispatches a rows-loading-failed action', async () => {
				fetchMock.mockRejectedValue(Error('no rows loaded'));

				await loadRows(getState, dispatch);

				expect(dispatch).toHaveBeenCalledTimes(2);
				expect(dispatch).toHaveBeenLastCalledWith({
					type: store.actionTypes.rowsLoadingFailed,
					payload: Error('no rows loaded')
				});
			});
		});

	});

	describe('reducer', () => {

		test('returns state when no matching action', () => {
			const initialState = 'initial';
			const newState = store.reducer(initialState, {});

			expect(newState).toEqual(initialState);
		});

		test.each([
			[store.actionTypes.rowsLoading, undefined, {rowsLoading: true}],
			[store.actionTypes.rowsLoadingFailed, 'error loading rows', {rowsLoading: false, rowsLoadingFailed: 'error loading rows'}],
			[store.actionTypes.rowsLoaded, {columnNames: 'names', rows: 'rows'}, {
				rowsLoading: false,
				columnNames: 'names',
				rows: 'rows'
			}],

		])('handles %s', (action, payload, exectedState) => {
			const initialState = {initial: 'state'};
			const newState = store.reducer(initialState, {type: action, payload});

			expect(newState).toEqual({
				...initialState,
				...exectedState
			});
		});
	});
});

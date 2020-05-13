import {createStore, combineReducers} from '../redux.mjs';

describe('store', () => {
	let noopReducer;

	beforeEach(() => {
		noopReducer = jest.fn(state => state);
	});

	test('creates a store without error', () => {
		expect(() => createStore(noopReducer)).not.toThrowError();
	});

	test('runs the reducers once upon initialisation', () => {
		createStore(noopReducer);

		expect(noopReducer).toHaveBeenCalledTimes(1);
		expect(noopReducer).toHaveBeenCalledWith({}, {});
	});

	test('creates a store with initial state', () => {
		const initialState = {field: 'value'};
		createStore(noopReducer, initialState);

		expect(noopReducer).toHaveBeenCalledTimes(1);
		expect(noopReducer).toHaveBeenCalledWith(initialState, {});
	});

	test('can retrieve state', () => {
		const {getState} = createStore(noopReducer, {field: 'value'});

		expect(getState()).toEqual({field: 'value'});
	});

	test('can dispatch an action', () => {
		const {dispatch} = createStore(noopReducer);

		expect(() => dispatch()).not.toThrowError();
	});

	test('reducer gets called on dispatch', () => {
		const {dispatch} = createStore(noopReducer);

		dispatch({type: 'reducer-dispatch-test'});

		expect(noopReducer).toHaveBeenCalledTimes(2);
		expect(noopReducer).toHaveBeenLastCalledWith(expect.any(Object), {type: 'reducer-dispatch-test'});
	});


	describe('thunks', () => {
		test('can dispatch a thunk', () => {
			const {dispatch, getState} = createStore(noopReducer);
			const thunk = jest.fn();

			dispatch(thunk);

			expect(thunk).toHaveBeenCalledTimes(1);
			expect(thunk).toHaveBeenCalledWith(getState, dispatch);
		});

		test('can dispatch an async thunk', () => {
			return new Promise(resolve => {
				const {dispatch, getState, subscribe} = createStore(noopReducer);

				const thunk = jest.fn().mockImplementationOnce((thunkGetState, thunkDispatch) => {
					setImmediate(() => {
						thunkDispatch({type: 'async-thunk-test'});
					});
				});

				subscribe(() => {
					expect(thunk).toHaveBeenCalledTimes(1);
					expect(thunk).toHaveBeenCalledWith(getState, dispatch);
					expect(noopReducer).toHaveBeenCalledWith({}, {type: 'async-thunk-test'});

					resolve();
				});

				dispatch(thunk);
			});
		});

		test('dispatch returns a promise if an async thunk returns one', async () => {
			expect.assertions(1);

			const promiseThunk = jest.fn().mockResolvedValueOnce('hello');
			const {dispatch} = createStore(noopReducer);

			const result = await dispatch(promiseThunk);

			expect(result).toEqual('hello');
		});
	});

	test('can subscribe', () => {
		const {subscribe, dispatch, getState} = createStore(noopReducer);
		const subscriber = jest.fn();

		subscribe(subscriber);
		dispatch({type: 'subscribe-action'});

		expect(subscriber).toHaveBeenCalledTimes(1);
		expect(subscriber).toHaveBeenCalledWith(getState);
	});

	test('can unsubscribe', () => {
		const {subscribe, dispatch} = createStore(noopReducer);
		const subscriber = jest.fn();
		const unsub = subscribe(subscriber);

		unsub();
		dispatch({type: 'subscribe-action'});

		expect(subscriber).not.toHaveBeenCalled();
	});

	test('reducer can return a new state', () => {
		const reducer = jest.fn()
			.mockImplementationOnce((x) => x)
			.mockImplementationOnce((state, action) => {
				return {
					new: 'state'
				};
			});
		const {getState, dispatch} = createStore(reducer);

		dispatch({type: 'reducer-test'});
		const newState = getState();

		expect(newState).toEqual({new: 'state'});
		expect(reducer).toHaveBeenCalledTimes(2);
		expect(reducer).toHaveBeenNthCalledWith(1, {}, {});
		expect(reducer).toHaveBeenNthCalledWith(2, {}, {type: 'reducer-test'});
	});
});

describe('combineReducers', () => {
	test('combines multiple reducers into one', () => {
		const reducer1 = jest.fn().mockReturnValueOnce('reducer1');
		const reducer2 = jest.fn().mockReturnValueOnce('reducer2');
		const reducer3 = jest.fn().mockReturnValueOnce('reducer3');

		const reducer = combineReducers({
			reducer1,
			reducer2,
			reducer3
		});

		reducer({
			reducer1: 'initial1',
			reducer2: 'initial2',
			reducer3: 'initial3'
		}, 'action-test');

		expect(reducer1).toHaveBeenCalledTimes(1);
		expect(reducer2).toHaveBeenCalledTimes(1);
		expect(reducer3).toHaveBeenCalledTimes(1);

		expect(reducer1).toHaveBeenCalledWith('initial1', 'action-test');
		expect(reducer2).toHaveBeenCalledWith('initial2', 'action-test');
		expect(reducer3).toHaveBeenCalledWith('initial3', 'action-test');
	});
});

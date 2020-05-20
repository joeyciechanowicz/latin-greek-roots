import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import {actionTypes} from './actions';

export function reducer(state, action) {
	switch (action.type) {
		case actionTypes.rowsLoaded:
			return {
				...state,
				rowsLoading: false,
				rows: action.payload.rows,
				columnNames: action.payload.columnNames
			};

		case actionTypes.rowsLoading:
			return {
				...state,
				rowsLoading: true
			};

		case actionTypes.rowsLoadingFailed:
			return {
				...state,
				rowsLoading: false,
				rowsLoadingFailed: action.payload
			};

		default:
			return state;
	}
}


const logger = store => next => action => {
	const prevState = store.getState();
	let result = next(action);

	console.groupCollapsed(`%c action ${action.type}`, 'color: gray;');
	console.log('prev state', prevState);
	console.log('action', action);
	console.log('next state', store.getState());
	console.groupEnd();

	return result;
};

const middleware = process.env.NODE_ENV === 'development' ?
	applyMiddleware(thunk, logger) :
	applyMiddleware(thunk);

const initialState = window.__INITIAL_STATE || {};

export const store = createStore(reducer, initialState, middleware);

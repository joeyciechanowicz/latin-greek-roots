import {createStore} from './redux.mjs';

export const actionTypes = {
	rowsLoaded: 'rows-loaded',
	rowsLoading: 'rows-loading',
	rowsLoadingFailed: 'rows-loading-failed'
};

export function loadRows() {
	return (getState, dispatch) => {
		dispatch({type: actionTypes.rowsLoading});

		return fetch('/rows.json')
			.then(data => data.json())
			.then(rows => dispatch({type: actionTypes.rowsLoaded, payload: rows}))
			.catch(error => dispatch({type: actionTypes.rowsLoadingFailed, payload: error}));
	};
}

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

const initialState = {};

export const store = createStore(reducer, initialState);

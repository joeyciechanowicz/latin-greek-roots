export const actionTypes = {
	rowsLoaded: 'rows-loaded',
	rowsLoading: 'rows-loading',
	rowsLoadingFailed: 'rows-loading-failed',
	currentRows: 'rows-current'
};

const paginationAmount = 50;

export function loadRows() {
	return (dispatch) => {
		dispatch({type: actionTypes.rowsLoading});

		return fetch('/rows.json')
			.then(data => data.json())
			.then(rows => dispatch({type: actionTypes.rowsLoaded, payload: rows}))
			.catch(error => dispatch({type: actionTypes.rowsLoadingFailed, payload: error}));
	};
}

export function paginate(page = 0) {
	return (dispatch, getState) => {
		const {rows} = getState();

		const startIndex = page * paginationAmount;

		if (rows)
	};
}

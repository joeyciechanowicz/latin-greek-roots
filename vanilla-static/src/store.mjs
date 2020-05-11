export function createStore(reducer, initialState = {}) {
	let state = initialState;
	const listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		if (typeof action === 'function') {
			return action(this.getState, this.dispatch);
		}

		state = reducer(state, action);

		for (const listener of listeners) {
			listener(getState);
		}
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			const index = listeners.indexOf(listener);
			listeners.splice(index, 1);
		}
	};

	dispatch({});

	return {
		getState,
		dispatch,
		subscribe
	};
}

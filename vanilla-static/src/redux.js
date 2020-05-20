export function createStore(reducer, initialState = {}) {
	let state = initialState;
	const listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		if (typeof action === 'function') {
			return action(getState, dispatch);
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

/**
 *
 * @param reducersMap An object mapping statePartName => reducer
 * @returns {function(state, action)}
 */
export function combineReducers(reducersMap) {
	const keys = Object.keys(reducersMap);

	return (state, action) => {
		const newState = {};

		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			newState[key] = reducersMap[key](state[key], action);
		}

		return newState;
	};
}


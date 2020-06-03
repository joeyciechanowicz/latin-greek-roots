import thunk, {ThunkAction} from 'redux-thunk';
import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import {rootsReducer} from './features/roots/reducer';

declare global {
	interface Window {
		__PRELOADED_STATE__: any;
		snapSaveState: () => void;
	}
}

export const rootReducer = combineReducers({
	roots: rootsReducer
});


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
export const store = createStore(
	rootReducer,
	preloadedState || {},
	applyMiddleware(thunk)
);

// Tell react-snap how to save Redux state
window.snapSaveState = () => {
	const paginated = store.getState().roots.rows.paginated;

	return {
		__PRELOADED_STATE__: {
			roots: {
				rows: {
					paginated: {
						current: paginated.current,
						currentPage: 0,
						totalPages: paginated.totalPages
					}
				}
			}
		}
	}
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<Return = Promise<void>, E = undefined> = ThunkAction<Return, RootState, E, Action<string>>;
export type AppDispatch = typeof store.dispatch;

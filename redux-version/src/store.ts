import thunk, {ThunkAction} from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, Action} from 'redux';
import {rootsReducer} from './features/roots/reducer';

export const rootReducer = combineReducers({
	roots: rootsReducer
});

export const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<Return = Promise<void>, E = undefined> = ThunkAction<Return, RootState, E, Action<string>>;
export type AppDispatch = typeof store.dispatch;


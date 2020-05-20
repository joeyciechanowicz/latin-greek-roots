import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk, {ThunkAction} from 'redux-thunk';
import rootsReducer from './features/roots/rootsSlice';

export const rootReducer = combineReducers({
	roots: rootsReducer
});

export const store = configureStore({
	devTools: process.env.NODE_ENV !== 'production',
	reducer: rootReducer,
	middleware: [thunk]
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;


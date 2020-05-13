import {store, loadRows} from './store.mjs';
// import {renderApp} from './renderer.mjs';

(async () => {
	store.subscribe(getState => {console.log('New state', getState()); });

	store.subscribe((getState) => {
		// renderApp(getState());
	});

	store.dispatch(loadRows());

})().catch(console.trace);

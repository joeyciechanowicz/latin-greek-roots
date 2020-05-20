import {store, loadRows} from './store.js';
// import {renderApp} from './renderer.mjs';

(async () => {
	store.subscribe(getState => {console.log('New state', getState()); });

	store.subscribe((getState) => {

	});

	store.dispatch(loadRows());

})().catch(console.trace);

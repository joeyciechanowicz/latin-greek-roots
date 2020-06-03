import React from 'react';
import {Provider} from 'react-redux';
import {hydrate, render} from 'react-dom';

import './index.sass';
// import 'milligram/src/milligram.sass';

import App from './App';
import {store} from './store';
import * as serviceWorker from './serviceWorker';

const ConnectedApp = () => (
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement?.hasChildNodes()) {
	hydrate(<ConnectedApp/>, rootElement);
} else {
	render(<ConnectedApp/>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'development') {
	serviceWorker.unregister();
} else {
	serviceWorker.unregister();
	// serviceWorker.register();
}

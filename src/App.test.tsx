import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './App';

describe('App', () => {
	test('renders page sections', () => {
		const {getByRole} = render(
			<Provider store={store}>
				<App/>
			</Provider>
		);

		expect(getByRole('searchbox')).toBeInTheDocument();
		expect(getByRole('main')).toBeInTheDocument();
		expect(getByRole('contentinfo')).toBeInTheDocument(); // <footer>
	});
});

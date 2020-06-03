import React, {useEffect} from 'react';

import {Search} from './features/roots/Search';
import {Results} from './features/roots/Results';

import {useDispatch} from 'react-redux';
import {loadAllRows, loadTrie} from './features/roots/thunks';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadAllRows());
		dispatch(loadTrie());
	});

	return (
		<>
			<header className="container">
				<Search/>
			</header>

			<main>
				<Results/>
			</main>

			<footer className="container u-mt-1">
				<div className="row">
					<div className="column u-center-text">
						Thanks to the Wikipedia pages for Latin and Greek Roots  <a href="https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/A-G">A-G</a>, <a href="https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/H-O">H-O</a>, <a href="https://en.wikipedia.org/wiki/List_of_Greek_and_Latin_roots_in_English/P-Z">P-Z</a>
					</div>
				</div>
			</footer>
		</>
	);
}

export default App;

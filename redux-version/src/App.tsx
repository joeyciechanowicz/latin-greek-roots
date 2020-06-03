import React, {useEffect} from 'react';
import '@ajusa/lit/dist/lit.css';

import {Search} from './features/roots/Search';
import {Results} from './features/roots/Results';

import './App.css';
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
			<header>
				<Search/>
			</header>

			<main>
				<Results/>
			</main>

			<footer>
				Copyright Wikipedia
			</footer>
		</>
	);
}

export default App;

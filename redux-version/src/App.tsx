import React, {useEffect} from 'react';
import '@ajusa/lit/dist/lit.css';

import {Search} from './features/roots/Search';
import {Results} from './features/roots/Results';

import './App.css';
import {useDispatch} from 'react-redux';
import {loadRowsAsync, loadTrieAsync} from './features/roots/rootsSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRowsAsync());
        dispatch(loadTrieAsync());
    });

	return (
		<div className="App">
			<header>
				<Search/>
			</header>

			<main>
				<Results/>
			</main>

			<footer>
				Copyright Wikipedia
			</footer>
		</div>
	);
}

export default App;

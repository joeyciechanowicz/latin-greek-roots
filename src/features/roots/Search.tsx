import React, {FormEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetSearch} from './actions';
import {search} from './thunks';
import {RootState} from '../../store';

export function Search() {
	const dispatch = useDispatch();

	const [searchTerm, setSearchTerm] = useState('');
	const {loading: loadingTrie} = useSelector((state: RootState) => state.roots.trie);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (searchTerm === '') {
			dispatch(resetSearch());
		} else {
			dispatch(search(searchTerm));
		}
	};

	return (
		<form onSubmit={handleSubmit} className="row">
				<input className="" type="search" id="search" placeholder="Search" value={searchTerm}
				       aria-label="search"
				       onChange={e => setSearchTerm(e.target.value)}/>

				<button className="u-ml-lg-1" type="submit" disabled={loadingTrie}>Search</button>
		</form>
	);
}

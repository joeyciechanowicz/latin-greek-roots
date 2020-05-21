import React, {FormEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchAsync, resetSearch} from './rootsSlice';
import {RootState} from '../../store';

export function Search() {
	const dispatch = useDispatch();

	const [searchTerm, setSearchTerm] = useState('');
	const loadingTrie = useSelector((state: RootState) => state.roots.loadingTrie);
	const searching = useSelector((state: RootState) => state.roots.searching);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (searchTerm === '') {
			dispatch(resetSearch());
		} else {
			dispatch(searchAsync(searchTerm))
		}
	};

	return (
		<div className="row">
			<div className="col ">
				<form onSubmit={handleSubmit}>
					<div className="11 col">
						<input className="card w-100" type="search" id="search" placeholder="Search" value={searchTerm}
						       aria-label="search"
						       onChange={e => setSearchTerm(e.target.value)}/>
					</div>

					<div className="1 col">
						<button className="btn" disabled={loadingTrie || searching} type="submit">{searching ? 'Searching' : 'Search'}</button>
					</div>
				</form>
			</div>
		</div>
	);
}

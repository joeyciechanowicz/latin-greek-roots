import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Table} from './Table';
import {Pagination} from '../../components/Pagination';
import {setPaginationPage} from './thunks';

export function Results() {
	const {loading, error} = useSelector((state: RootState) => state.roots.rows);
	const {currentPage, totalPages} = useSelector((state: RootState) => state.roots.rows.paginated);
	const dispatch = useDispatch();

	if (loading) {
		return (
			<h1>Loading...</h1>
		);
	}

	if (error) {
		return (
			<>
				<h1>Error</h1>
				<p>
					{error}
				</p>
			</>
		);
	}


	const pagination = (
		<Pagination
			currentPage={currentPage}
			totalPages={totalPages}
			onPrevious={() => dispatch(setPaginationPage(currentPage - 1))}
			onNext={() => dispatch(setPaginationPage(currentPage + 1))}
		/>
	);

	return (
		<>
			{pagination}
			<Table/>
			{pagination}
		</>
	);
}

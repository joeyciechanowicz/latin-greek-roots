import React from 'react';
import {Row} from './roots/types';
import {TableRow} from '../components/Table-row';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {setPaginationPage} from './roots/thunks';

export function Table() {
	const {current, currentPage, totalPages} = useSelector((state: RootState) => state.roots.rows.paginated);
	const dispatch = useDispatch();

	const pagination = (
		<div className="row">
			<button className="btn" onClick={() => dispatch(setPaginationPage(currentPage - 1))} disabled={currentPage === 0}>
				Previous
			</button>

			<span>
				{`${currentPage + 1}/${totalPages}`}
			</span>

			<button className="btn" onClick={() => dispatch(setPaginationPage(currentPage + 1))}
			        disabled={currentPage === totalPages - 1}>
				Next
			</button>
		</div>
	);

	const trRows = current.length === 0 ?
		<tr>
			<td colSpan={6}>No results</td>
		</tr>
		: current.map((row: Row) => (
			<TableRow key={row.index} row={row}/>
		));

	return (
		<>
			{pagination}
			<div className="row">

				<table className="w-100">
					<thead>
					<tr>
						<th scope="col">Roots</th>
						<th scope="col">Meaning</th>
						<th scope="col">Origin Language</th>
						<th scope="col">Etymology</th>
						<th scope="col">Examples</th>
					</tr>
					</thead>
					<tbody>
					{trRows}
					</tbody>
				</table>

			</div>
			{pagination}
		</>
	);
}

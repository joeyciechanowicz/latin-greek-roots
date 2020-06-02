import React, {useEffect, useState} from 'react';
import {Row} from '../features/roots/types';
import {TableRow} from './Table-row';

const PAGINATION_AMOUNT = 25;

function usePagination(totalRows: number, paginationAmount: number) {
	const totalPages = Math.ceil(totalRows / paginationAmount);
	const [currentPage, setCurrentPage] = useState<number>(0);

	const setPage = (page: number) => {
		if (0 <= page && page < totalPages) {
			setCurrentPage(page);
		}
	};

	useEffect(() => {
		setCurrentPage(0);
	}, [totalRows]);

	return {
		setPage,
		currentPage,
		totalPages
	};
}


export function Table({rows}: { rows: Row[] }) {
	const {setPage, currentPage, totalPages} = usePagination(rows.length, PAGINATION_AMOUNT);
	const [currentRows, setCurrentRows] = useState<Row[]>([]);

	useEffect(() => {
		setCurrentRows(rows.slice(currentPage * PAGINATION_AMOUNT, (currentPage + 1) * PAGINATION_AMOUNT));
	}, [rows, currentPage]);

	console.log('render');

	const pagination = (
		<div className="row">
			<button className="btn" onClick={() => setPage(currentPage - 1)} disabled={currentPage === 0}>
				Previous
			</button>

			<span>
				{currentPage + 1} / {totalPages}
			</span>

			<button className="btn" onClick={() => setPage(currentPage + 1)}
			        disabled={currentPage === totalPages - 1}>
				Next
			</button>
		</div>
	);

	const trRows = rows.length === 0 ?
		<tr>
			<td colSpan={6}>No results</td>
		</tr>
		: currentRows.map((row: Row) => (
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

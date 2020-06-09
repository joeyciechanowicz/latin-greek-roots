import React from 'react';
import {Row} from './types';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const commaSeparated = (list: string[]) => list.map((item, i) => `${item}${i < list.length - 1 ? ', ' : ''}`);

function TableRow({row}: {row: Row}) {
	return (
		<tr key={row.index}>
			<td>{commaSeparated(row.roots)}</td>
			<td>{row.meaning}</td>
			<td>{row.originLanguage}</td>
			<td>{row.etymology}</td>
			<td>{commaSeparated(row.examples)}</td>
		</tr>
	);
}

export function Table() {
	const {current} = useSelector((state: RootState) => state.roots.rows.paginated);

	const trRows = current.length === 0 ?
		<tr>
			<td colSpan={6}>No results</td>
		</tr>
		: current.map((row: Row) => (
			<TableRow key={row.index} row={row}/>
		));

	return (
		<table className="pure-table">
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
	);
}

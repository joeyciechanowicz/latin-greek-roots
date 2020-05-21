import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Row} from './rootsSlice';

const commaSeparated = (list: string[]) => list.map((item, i) => `${item}${i < list.length - 1 ? ', ' : ''}`);

export function Results() {
	const rows = useSelector((state: RootState) => state.roots.currentRows);
	const loadingRows = useSelector((state: RootState) => state.roots.loadingRows);
	const error = useSelector((state: RootState) => state.roots.error);

	if (loadingRows) {
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

	const trRows = rows.length === 0 ?
		<tr>
			<td colSpan={5}>No results</td>
		</tr>
		: rows.map((row: Row) => (
			<tr key={row.index}>
				<td>{commaSeparated(row.roots)}</td>
				<td>{row.meaning}</td>
				<td>{row.originLanguage}</td>
				<td>{row.etymology}</td>
				<td>{commaSeparated(row.examples)}</td>
			</tr>
		));

	return (
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
	);
}

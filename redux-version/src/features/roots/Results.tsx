import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const commaSeparated = (list: string[]) => list.map((item, i) => `${item}${i < list.length - 1 ? ', ': ''}`);

export function Results() {
	const rows = useSelector((state: RootState) => state.roots.rows);
	const loadingRows = useSelector((state: RootState) => state.roots.loadingRows);

	if (!loadingRows && rows) {
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
					{rows.map(row => (
						<tr>
							<td>{commaSeparated(row.roots)}</td>
							<td>{row.meaning}</td>
							<td>{row.originLanguage}</td>
							<td>{row.etymology}</td>
							<td>{commaSeparated(row.examples)}</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		);
	}

	return (
		<h1>Loading...</h1>
	);
}

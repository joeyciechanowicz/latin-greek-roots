import React from 'react';
import {Row} from '../features/roots/types';

const commaSeparated = (list: string[]) => list.map((item, i) => `${item}${i < list.length - 1 ? ', ' : ''}`);

export function TableRow({row}: {row: Row}) {
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

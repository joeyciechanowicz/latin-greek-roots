


export function initialiseRows() {
	return fetch('rows.json')
		.then(data => data.json());
}

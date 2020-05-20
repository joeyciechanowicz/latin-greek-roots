import {connect} from 'inferno-redux';

const commaSeparated = list => list.map((item, i) => `${item}${i < list.length - 1 ? ', ': ''}`);

const Results = props => {
	if (props.rowsLoadingFailed) {
		return (
			<div className="row">
				<h1>Error</h1>
				<p>
					{props.rowsLoadingFailed}
				</p>
			</div>
		);
	}

	if (props.rows && props.rows.length > 0) {
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
					<tbody $HasNonKeyedChildren>{
						props.rows.map(row => (
							<tr>
								<td>{commaSeparated(row[0])}</td>
								<td>{row[1]}</td>
								<td>{row[2]}</td>
								<td>{row[3]}</td>
								<td>{commaSeparated(row[4])}</td>
							</tr>
						))
					}
					</tbody>
				</table>
			</div>
		);
	}

	return <div className="row"><h1>Loading...</h1></div>;
};

const mapStateToProps = (state) => {
	return {
		rowsLoading: state.rowsLoading,
		rowsLoadingFailed: state.rowsLoadingFailed,
		rows: state.rows
	}
};

export const ConnectedResults = connect(mapStateToProps)(Results);

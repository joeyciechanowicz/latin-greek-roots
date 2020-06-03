import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Table} from '../Table';

export function Results() {
	const {loading, error} = useSelector((state: RootState) => state.roots.rows);

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

	return <Table />;
}

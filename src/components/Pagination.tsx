import React, {useEffect} from 'react';

export function Pagination({currentPage, totalPages, onPrevious, onNext}: { currentPage: number, totalPages: number, onPrevious: () => void, onNext: () => void }) {
	useEffect(() => {
		window.scrollTo({top: 0});
	});

	return (
		<div className="container">
			<div className="row">
				<button className="column button-outline" onClick={() => onPrevious()}
				        disabled={currentPage === 0}>
					Previous
				</button>

				<span className="column u-center-text">
				{`${currentPage + 1}/${totalPages}`}
			</span>

				<button className="column button-outline" onClick={() => onNext()}
				        disabled={currentPage === totalPages - 1}>
					Next
				</button>
			</div>
		</div>
	);
}

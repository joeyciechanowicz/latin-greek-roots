import {Component} from 'inferno';

export class Search extends Component {
	render() {
		return (
			<div className="row">
				<div className="col ">
					<form>
						<label htmlFor="search" className="1 col">Search</label>
						<div className="11 col">
							<input className="card w-100" type="search" id="search" placeholder=""/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

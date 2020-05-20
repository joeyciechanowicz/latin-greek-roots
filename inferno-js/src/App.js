import {Component} from 'inferno';
import {Provider} from 'inferno-redux';

import '@ajusa/lit/dist/lit.css';
import './styles.css';

import {loadRows, paginate} from './actions';
import {store} from './store';
import {Search} from './search';
import {ConnectedResults} from './results';

class App extends Component {
	async componentDidMount() {
		await store.dispatch(loadRows());
		await store.dispatch(paginate(0));
	}

	render() {
		return (
			<Provider store={store}>
				<header>
					<Search/>
				</header>

				<main>
					<ConnectedResults/>
				</main>

				<footer>
					Copyright Wikipedia
				</footer>
			</Provider>
		);
	}
}

export default App;

import { Flux } from 'flummox';
import ResultActions from './actions/ResultActions';
import ResultStore from './stores/ResultStore';

class AppFlux extends Flux {

	constructor() {
		super();

		var resultActions = this.createActions('results', ResultActions);
		this.createStore('results', ResultStore, this);
	}

}

export default AppFlux;

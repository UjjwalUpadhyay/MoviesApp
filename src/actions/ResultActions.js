import { Actions } from 'flummox';
import imdApi from '../imdApi';

export default class ResultActions extends Actions {

	movieQuery(query) {
		this.movieSearch(query);
		return query;
	}

	movieSearch(query) {
		try {
			return imdApi.get('', {
				query: query
			});
		} catch(error) {
			console.log('Error', error);
		}
	}

	clearSearch() {
		return '';
	}

}

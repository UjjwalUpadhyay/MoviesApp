import React from 'react';
import _ from 'lodash';
import fluxMixin from 'flummox/mixin';

// Components
import App from './App';

const AppContainer = React.createClass({
	mixins: [fluxMixin({
		results: (store) => ({results: store.getResults(), query: store.getQuery()})
	})],

	render() {
		return (
			<App
				flux={this.flux}
				results={this.state.results}
				query={this.state.query}
			/>
		);
	}
});

export default AppContainer;

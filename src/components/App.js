// Libs
import React from 'react';
import imdApi from '../imdAPI';

// Components
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

const App = React.createClass({
	componentWillMount() {
		window.addEventListener('resize', this.handleWindowResize);
		this.handleWindowResize();
	},

	handleWindowResize(event) {
		this.setState({
			windowWidth: window.innerWidth
		});
	},

	render() {
		var resultsActions = this.props.flux.getActions('results');

		var watchlist = this.props.watchlist ? this.props.watchlist.map(movie => _.extend(movie, {
			poster_url: 'http://image.tmdb.org/t/p/w300' + movie.poster_path
		})) : null;

		var wrapperStyle = {
			// Reset
			fontSize: '1rem',
			// Color
			backgroundColor: '#272727',
			color: '#efefef',
			paddingBottom: 250
		};

		var headerStyles = {
			position: 'fixed',
			bottom: 0,
			left: 0,
			zIndex: 1,
			width: '100%',
			background: '-webkit-linear-gradient(bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 100%)',
			color: '#fff',
			padding: '4rem 2rem 2rem',
			pointerEvents: 'none'
		};

		var headerTitleStyles = {
			fontSize: '2rem'
		};

		var headerBodyStyles = {
			overflow: 'hidden'
		};

		var headerDescStyles = {
			paddingTop: '1em',
			lineHeight: 1.4,
			float: 'left',
			fontSize: '1.2rem'
		};

		var headerLogoutBtnStyles = {
			float: 'right',
			paddingTop: '1em',
			color: '#42aaf3',
			borderBottom: '1px solid',
			fontSize: '1.2rem',
			pointerEvents: 'auto'
		};

		return (
			<section style={wrapperStyle}>

				<header style={headerStyles}>
					<h1 style={headerTitleStyles}>Watchlist.</h1>
					<div style={headerBodyStyles}>
						<p style={headerDescStyles}>A movie list app built with React.</p>

					</div>
				</header>

				{<SearchBox
					value={this.props.query}
					onSearch={resultsActions.movieQuery}
					onClear={resultsActions.clearSearch}
					windowWidth={this.state.windowWidth}
				/>}

				{
					<div>

						<SearchResults
							results={this.props.results}
							watchlist={watchlist}
							user={this.props.user}
							onItemClick={this.onSearchResultsItemClick}
							windowWidth={this.state.windowWidth}
						/>

					</div>
				}

			</section>
		);
	},

});

export default App;

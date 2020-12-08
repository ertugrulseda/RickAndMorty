import React from 'react';
import {Link, }  from 'react-router-dom';
import '../../pages/index.css';

class Characters extends React.Component {
	state = {
		data: []
	};

	fetchCharacters = async () => {
		const response = await fetch('https://rickandmortyapi.com/api/character');
		const jsondata = await response.json();
		this.setState({
			data: jsondata.results
		});
	};

	componentDidMount() {
		this.fetchCharacters();
	}
	render() {
		return (
			<div className="characters-container">		
				<ul className="ul-element">
					{this.state.data.map((item) => (
						<li key={item.id} className="li-element">
							<Link to={'/character/' + item.id}>{item.id} &#x27A1; {item.name}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default Characters;

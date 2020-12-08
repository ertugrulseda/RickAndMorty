import React from 'react';
import '../../pages/index.css';

class Locations extends React.Component {
	state = {
		data: []
	};

	fetchLocations = async () => {
		const response = await fetch('https://rickandmortyapi.com/api/location?page=1');
		const jsondata = await response.json();
		this.setState({
			data: jsondata.results
		});
	};

	componentDidMount() {
		this.fetchLocations();
	}
	render() {
		return (
			<div className="locations-container">
				<ul className="ul-element">
					{this.state.data.map((item) => (
						<li className="li-element" key={item.id}>
							&#x27A1; {item.name}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default Locations;

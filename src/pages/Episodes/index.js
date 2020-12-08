import React from 'react';
import '../../pages/index.css';

class Episodes extends React.Component {
	state = {
		data: []
	};

	fetchEpsodes = async () => {
		const response = await fetch('https://rickandmortyapi.com/api/episode?page=1');
		const jsondata = await response.json();
		this.setState({
			data: jsondata.results
		});
	};

	componentDidMount() {
		this.fetchEpsodes();
	}
	render() {
		return (
			<div className="episodes-container">
				<ul className="ul-element">
					{this.state.data.map((item) => (
						<li className="li-element" key={item.id}>{item.id} .Bölüm 	&#x27A1;
							{item.name}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default Episodes;

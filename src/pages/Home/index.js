import React from 'react';
import '../../pages/index.css';
function Home() {
	const url = 'https://www.youtube.com/embed/wh10k2LPZiI';
	return (
		<div className="home-container">
			<iframe src={url} width="100%" height="100%" allowfullscreen></iframe>			
		</div>
	);
}
export default Home;

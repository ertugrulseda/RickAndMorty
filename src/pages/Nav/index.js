import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logopng from '../../logo.png';
const Navbar = () => {
	return (
		<nav className="navigation">
			<Link className="link brand" to="/">
				<img src={logopng} />
			</Link>
			<ul className="toolbar-ul">
				<li className="toolbar-li">
					<Link className="link" to="/characters">
						Characters
					</Link>
				</li>
				<li className="toolbar-li">
					<Link className="link" className="link" to="/locations">
						Locations
					</Link>
				</li>
				<li className="toolbar-li">
					<Link className="link" to="/episodes">
						Episodes
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default withRouter(Navbar);

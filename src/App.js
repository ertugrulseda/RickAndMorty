import logopng from './logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import CharacterDetail from './pages/CharacterDetail';

function App() {
	return (
		<Router className="router">
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
			<div className="body">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/characters">
						<Characters />
					</Route>

					<Route path="/locations">
						<Locations />
					</Route>

					<Route path="/episodes">
						<Episodes />
					</Route>

					<Route path="/character/:id">
						<CharacterDetail />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

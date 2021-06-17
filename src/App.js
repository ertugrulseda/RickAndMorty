
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import CharacterDetail from './pages/CharacterDetail';
import Navbar from './pages/Nav';

function App() {
	return (
		<Router className="router">
			<Navbar />
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

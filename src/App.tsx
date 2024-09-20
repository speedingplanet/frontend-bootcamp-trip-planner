import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TripsManager from './trips/TripsManager';

function App() {
	return (
		<BrowserRouter>
			{/* nav>ul>li>NavLink */}
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/trips">Trips</NavLink>
					</li>
				</ul>
			</nav>
			<p>Placeholder for our trip planning app.</p>

			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/trips"
					element={<TripsManager />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

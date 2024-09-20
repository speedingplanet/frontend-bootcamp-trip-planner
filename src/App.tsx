import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TripsManager from './trips/TripsManager';
import SettingsManager from './settings/SettingsManager';
import FriendsManager from './friends/FriendsManager';
import LocationsManager from './locations/LocationsManager';

function App() {
	return (
		<BrowserRouter>
			{/* nav>ul>li>NavLink */}
			<nav>
				<NavLink to="/">Home</NavLink>&nbsp;|&nbsp;
				<NavLink to="/trips">Trips</NavLink>&nbsp;|&nbsp;
				<NavLink to="/locations">Locations</NavLink>&nbsp;|&nbsp;
				<NavLink to="/friends">Friends</NavLink>&nbsp;|&nbsp;
				<NavLink to="/settings">Settings</NavLink>
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
				<Route
					path="/locations"
					element={<LocationsManager />}
				/>
				<Route
					path="/friends"
					element={<FriendsManager />}
				/>
				<Route
					path="/settings"
					element={<SettingsManager />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

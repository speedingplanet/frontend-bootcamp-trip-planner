import { BrowserRouter, NavLink, NavLinkRenderProps, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TripsManager from './trips/TripsManager';
import SettingsManager from './settings/SettingsManager';
import FriendsManager from './friends/FriendsManager';
import LocationsManager from './locations/LocationsManager';

const getClassesWhenActive = ({ isActive }: NavLinkRenderProps) =>
	isActive ? 'font-bold underline' : 'hover:underline';

function App() {
	return (
		<main className="mx-4">
			<BrowserRouter>
				{/* nav>ul>li>NavLink */}
				<header className="mb-2 text-center text-2xl">
					<nav>
						<h1 style={{ fontFamily: 'National Park', fontWeight: '600' }}>
							National Parks Social Trip Planner
						</h1>
						<hr />
					</nav>
				</header>
				<nav className="my-2 text-center">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'font-bold underline' : 'hover:underline')}
					>
						Home
					</NavLink>
					&nbsp;|&nbsp;
					<NavLink
						to="/trips"
						className={getClassesWhenActive}
					>
						Trips
					</NavLink>
					&nbsp;|&nbsp;
					<NavLink
						to="/locations"
						className={({ isActive }) => {
							if (isActive) {
								return 'font-bold underline';
							}
							return 'hover:underline';
						}}
					>
						Locations
					</NavLink>
					&nbsp;|&nbsp;
					<NavLink
						to="/friends"
						className={({ isActive }) => {
							if (isActive) {
								return 'font-bold underline';
							}
							return 'hover:underline';
						}}
					>
						Friends
					</NavLink>
					&nbsp;|&nbsp;
					<NavLink
						to="/settings"
						className={({ isActive }) => {
							if (isActive) {
								return 'font-bold underline';
							}

							return 'hover:underline';
						}}
					>
						Settings
					</NavLink>
				</nav>
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
						path="/locations/*"
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
		</main>
	);
}

export default App;

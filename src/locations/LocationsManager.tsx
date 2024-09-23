import { NavLink, Route, Routes } from 'react-router-dom';
import BrowseLocations from './BrowseLocations';
import SearchLocations from './SearchLocations';
import parks from '../data/parks-shorter.json';
import { Park } from '../social-trips-types';

function LocationsManager() {
	return (
		<section>
			<nav>
				<span>
					<NavLink to="browse">Browse</NavLink>
				</span>
				&nbsp;|&nbsp;
				<span>
					<NavLink to="search">Search</NavLink>
				</span>
			</nav>
			<Routes>
				<Route
					path="browse"
					element={<BrowseLocations locations={parks as Park[]} />}
				/>
				<Route
					path="search"
					element={<SearchLocations />}
				/>
			</Routes>
		</section>
	);
}

export default LocationsManager;

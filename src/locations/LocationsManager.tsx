import { NavLink, Route, Routes } from 'react-router-dom';
import SearchLocations from './SearchLocations';
import parks from '../data/parks-shorter.json';
import { Park } from '../social-trips-types';
import LocationDetails from './LocationDetails';
import ListDetailLocations from './ListDetailLocations';

function LocationsManager() {
	return (
		<section>
			<header>
				<h2>Locations / Parks</h2>
			</header>
			<nav className="mb-2">
				<span>
					<NavLink to="browse">Browse</NavLink>
				</span>
				&nbsp;|&nbsp;
				<span>
					<NavLink
						to="search"
						className="hover:underline"
					>
						Search
					</NavLink>
				</span>
				&nbsp;|&nbsp;
				<span>
					<NavLink
						to="details"
						className="hover:underline"
					>
						Details
					</NavLink>
				</span>
			</nav>
			<Routes>
				<Route
					path="browse"
					element={<ListDetailLocations locations={parks as Park[]} />}
				/>
				<Route
					path="search"
					element={<SearchLocations />}
				/>
				<Route
					path="details"
					element={<LocationDetails park={parks[1]} />}
				/>
			</Routes>
		</section>
	);
}

export default LocationsManager;

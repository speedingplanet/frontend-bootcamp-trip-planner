import { NavLink, Route, Routes } from 'react-router-dom';
import SearchLocations from './SearchLocations';
import parks from '../data/parks-shorter.json';
import { Park } from '../social-trips-types';
import LocationDetails from './LocationDetails';
import ListDetailLocations from './ListDetailLocations';
import LocationsAsTable from './LocationsAsTable';
import FetchParks from './FetchParks';

function LocationsManager() {
	return (
		<section>
			<header>
				<h2>Locations / Parks</h2>
			</header>
			<nav className="mb-2">
				<span>
					<NavLink
						to="browse"
						className={({ isActive }) => (isActive ? 'font-bold underline' : 'hover:underline')}
					>
						Browse
					</NavLink>
				</span>
				&nbsp;|&nbsp;
				<span>
					<NavLink
						to="browse-table"
						className={({ isActive }) => (isActive ? 'font-bold underline' : 'hover:underline')}
					>
						Browse as table
					</NavLink>
				</span>
				&nbsp;|&nbsp;
				<span>
					<NavLink
						to="browse-async"
						className={({ isActive }) => (isActive ? 'font-bold underline' : 'hover:underline')}
					>
						Browse async
					</NavLink>
				</span>
				&nbsp;|&nbsp;
				<span>
					<NavLink
						to="search"
						className={({ isActive }) => (isActive ? 'font-bold underline' : 'hover:underline')}
					>
						Search
					</NavLink>
				</span>
				&nbsp;|&nbsp;
				<span>
					<NavLink
						to="details"
						className={({ isActive }) => (isActive ? 'font-bold underline' : 'hover:underline')}
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
					path="browse-table"
					element={<LocationsAsTable locations={parks as Park[]} />}
				/>
				<Route
					path="browse-async"
					element={<FetchParks />}
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

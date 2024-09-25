import { Park } from '../social-trips-types';

type BrowseLocationProps = {
	locations: Park[];
	selectPark?: (park: Park) => void;
};

function BrowseLocations({ locations, selectPark }: BrowseLocationProps) {
	return (
		<ul style={{ cursor: 'pointer' }}>
			{locations.map((park) => (
				<li
					onClick={() => selectPark && selectPark(park)}
					key={park.id}
				>
					{park.fullName}
				</li>
			))}
		</ul>
	);
}

export default BrowseLocations;

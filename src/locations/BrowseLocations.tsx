import { Park } from '../social-trips-types';

type BrowseLocationProps = {
	locations: Park[];
	selectPark: (park: Park) => void;
};

function BrowseLocations({ locations, selectPark }: BrowseLocationProps) {
	return (
		<ul>
			{locations.map((park) => (
				<li
					style={{ cursor: 'pointer' }}
					onClick={() => selectPark(park)}
					key={park.id}
				>
					{park.fullName}
				</li>
			))}
		</ul>
	);
}

export default BrowseLocations;

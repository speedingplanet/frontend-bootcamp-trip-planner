import { Park } from '../social-trips-types';

type BrowseLocationProps = {
	locations: Park[];
};

function BrowseLocations({ locations }: BrowseLocationProps) {
	return (
		<ul>
			{locations.map((park) => (
				<li>{park.fullName}</li>
			))}
		</ul>
	);
}

export default BrowseLocations;

import { Park } from '../social-trips-types';

type LocationDetailsProps = { park: Park };

function LocationDetails({ park }: LocationDetailsProps) {
	return <div>Details for {park.name}</div>;
}

export default LocationDetails;

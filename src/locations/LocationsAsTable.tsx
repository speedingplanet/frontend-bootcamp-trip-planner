import React from 'react';
import { Park } from '../social-trips-types';

type LocationsAsTableProps = {
	locations: Park[];
	selectPark?: (park: Park) => void;
};

function LocationsAsTable({ locations, selectPark }: LocationsAsTableProps) {
	return <div>LocationsAsTable</div>;
}

export default LocationsAsTable;

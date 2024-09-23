import React from 'react';
import { Park } from '../social-trips-types';

type BrowseLocationProps = {
	locations: Park[];
};

function BrowseLocations({ locations }: BrowseLocationProps) {
	return <p>Placeholder for Locations data. There are {locations.length} parks</p>;
}

export default BrowseLocations;

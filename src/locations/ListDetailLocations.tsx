import React, { useState } from 'react';
import { Park } from '../social-trips-types';
import BrowseLocations from './BrowseLocations';
import LocationDetails from './LocationDetails';

type ListDetailLocationsProps = {
	locations: Park[];
};

function ListDetailLocations({ locations }: ListDetailLocationsProps) {
	const [selectedPark, setSelectedPark] = useState<Park | null>(null);

	function handleSelectedPark(park: Park) {
		console.log(`${park.name} selected`);
		setSelectedPark(park);
	}

	return (
		<section className="flex justify-around">
			<div>
				<BrowseLocations
					locations={locations}
					selectPark={handleSelectedPark}
				/>
			</div>
			<div className="basis-1/4">
				{selectedPark ? <LocationDetails park={selectedPark} /> : <p>No park selected</p>}
			</div>
		</section>
	);
}

export default ListDetailLocations;

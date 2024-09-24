import { useEffect, useState } from 'react';
import { Park } from '../social-trips-types';

let baseUrl = 'https://developer.nps.gov/api/v1/';

async function fetchParks() {
	try {
		const response = await fetch(baseUrl + 'parks', {
			headers: {
				'X-Api-Key': 'xaHFbOuY2aa3gSWgko8TKsM1ob0Oz7D63dAzdgxN',
			},
		});
		if (response.ok) {
			let results = await response.json();
			return results.data;
		} else {
			throw new Error(`Bad HTTP response: ${response.status}`);
		}
	} catch (error) {
		console.error('fetchParks: something went wrong:', error);
		throw error;
	}
}

function FetchLocations() {
	const [locations, setLocations] = useState<Array<Park>>([]);

	useEffect(() => {
		fetchParks().then((parks) => setLocations(parks));
	}, []);

	return (
		<div>
			<p>There are {locations.length} locations</p>
		</div>
	);
}

export default FetchLocations;

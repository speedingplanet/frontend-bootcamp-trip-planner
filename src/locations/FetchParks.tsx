/*
- Write a function, OUTSIDE FetchParks
	- async
	- Called fetchData
	- Fetches data from https://developer.nps.gov/api/v1/parks
	- Pass your API key as a header
		- Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#setting_headers
		- Header name is X-Api-Key
		- Value is your API key
- In FetchParks
		- Set up state to store parks
		- Call useEffect with an empty dependency array!
			- useEffect(() => {}, []) <--- DON'T FORGET
		- In useEffect()
			- Call fetchData()
			- then() to get the results and set state with them
			- Remember that the results have a data property
			- catch() after then() to handle potential errors
		- In the return statement
			- Write something like `There are ${parks.length} parks`
			- Or you could iterate over the results and print out the park names
			- Or you could use BrowseLocations and pass it the parks you downloaded
- Load up your component and see if it works!
*/

import { useEffect, useState } from 'react';
import { Park } from '../social-trips-types';
import BrowseLocations from './BrowseLocations';

async function fetchData() {
	let response = await fetch('https://developer.nps.gov/api/v1/parks', {
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
}

function FetchParks() {
	const [parks, setParks] = useState<Park[]>([]);

	useEffect(() => {
		// Sticks to async mode, but needs another function
		async function getData() {
			try {
				let parks = await fetchData();
				setParks(parks);
			} catch (error) {
				console.error('Failed to fetch parks:', error);
			}
		}

		getData();
	}, []);

	return <BrowseLocations locations={parks} />;
}

export default FetchParks;

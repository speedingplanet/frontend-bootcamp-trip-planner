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
- Load up your component and see if it works!
*/

function FetchParks() {
	return <div>FetchParks</div>;
}

export default FetchParks;

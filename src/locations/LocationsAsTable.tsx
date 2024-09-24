import { Park } from '../social-trips-types';

type LocationsAsTableProps = {
	locations: Park[];
	selectPark?: (park: Park) => void;
};

function LocationsAsTable({ locations }: LocationsAsTableProps) {
	return (
		<table className="table-auto">
			<thead>
				<tr className="text-left">
					<th>Name</th>
					<th>Designation</th>
					<th>State(s)</th>
				</tr>
			</thead>
			<tbody>
				{locations.map((location) => {
					return (
						<tr>
							<td>{location.name}</td>
							<td>{location.designation}</td>
							{/* <td>{location.states.replace(/,/g, ', ')}</td> */}
							<td>{location.states.replaceAll(',', ', ')}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default LocationsAsTable;

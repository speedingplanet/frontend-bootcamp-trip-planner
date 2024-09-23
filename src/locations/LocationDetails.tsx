import { Park } from '../social-trips-types';

type LocationDetailsProps = { park: Park };
function LocationDetails({
	park: { fullName, description, latLong, states, images },
}: LocationDetailsProps) {
	console.log(`LocationDetails ${fullName}`);
	const [lat, long] = latLong.replace(/(lat|long):/g, '').split(', ');

	return (
		<section className="border-4 border-black">
			<div className="text-center text-lg border-b-2">{fullName}</div>
			<div className="p-2 border-b-2">{description}</div>
			<div className="flex border-b-2">
				<div className="flex-1 pl-2 border-r-2">Latitude: {lat}</div>{' '}
				<div className="flex-1 pl-2 border-r-2">Longitude: {long}</div>
				<div className="flex-1 pl-2">{states}</div>
			</div>
			<div className="flex justify-stretch">
				{images?.map((i, index) => (
					<img
						className="w-1/4"
						key={index}
						src={i.url}
						title={i.title}
						alt={i.altText}
					/>
				))}
			</div>
		</section>
	);
}

export default LocationDetails;

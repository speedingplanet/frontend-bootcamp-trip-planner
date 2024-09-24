import { Image, Park } from '../social-trips-types';
import { sampleSize } from 'lodash-es';

type LocationDetailsProps = { park: Park };
function LocationDetails({
	park: { fullName, description, latLong, states, images },
}: LocationDetailsProps) {
	console.log(`LocationDetails ${fullName}`);
	const [lat, long] = latLong.replace(/(lat|long):/g, '').split(', ');

	function getRandomImages(images: Image[], amount = 1) {
		if (amount >= 1) {
			return sampleSize(images, amount);
		}
	}

	return (
		<section className="border-4 border-black min-w-96">
			<div className="text-center text-lg border-b-2">{fullName}</div>
			<div className="p-2 border-b-2">{description}</div>
			<div className="flex border-b-2">
				<div className="flex-1 pl-2 border-r-2">Latitude: {lat}</div>{' '}
				<div className="flex-1 pl-2 border-r-2">Longitude: {long}</div>
				<div className="flex-1 pl-2">{states}</div>
			</div>
			<div className="max-h-64">
				<img src={getRandomImages(images!, 1)![0].url} />
			</div>
		</section>
	);
}

export default LocationDetails;

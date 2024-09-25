import { Image, Park } from '../social-trips-types';
import { sampleSize } from 'lodash-es';

type LocationDetailsProps = { park: Park; preferredImage?: number };
function LocationDetails({
	park: { fullName, description, latLong, states, images },
	preferredImage,
}: LocationDetailsProps) {
	console.log(`LocationDetails ${fullName}`);
	const [lat, long] = latLong.replace(/(lat|long):/g, '').split(', ');

	function getRandomImages(images: Image[], amount = 1): Image[] {
		if (amount >= 1) {
			return sampleSize(images, amount);
		} else {
			return images.slice(0, 1);
		}
	}

	let selectedImage = null;

	if (images !== undefined) {
		if (preferredImage !== undefined) {
			selectedImage = images[preferredImage];
		} else {
			selectedImage = getRandomImages(images)[0];
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
				{selectedImage ? (
					<img
						src={selectedImage.url}
						alt={selectedImage.altText}
						title={selectedImage.title}
					/>
				) : (
					<span>No image found</span>
				)}
			</div>
		</section>
	);
}

export default LocationDetails;

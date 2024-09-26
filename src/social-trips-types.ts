export interface Trip {
	id: number;
	name: string;
	destination?: string | Park | Destination['id'];
	duration?: number;
	startDate?: Date;
	endDate?: Date;
	organizer: User;
	// Always participants, but the array might be empty
	participants: User[] | User['id'][];

	// Always comments, but the array might be empty
	comments: Comment[] | Comment['id'][];
}

export interface Address {
	id: number;
	street: string;
	city: string;
	state: string;
	country: string;
	zip: string;
}

export interface LatLong {
	latitude: number;
	longitude: number;
}

export interface User {
	id: number;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	address?: Address;
	friends: User[];
	trips: Trip[];
}

interface Comment {
	id: number;
	userId: number;
	user?: User;
	tripId: number;
	trip?: Trip;
	// Assumes replying to another comment
	replyToId?: number;
}

/* Starting with US National Parks */
export interface Destination {
	id: string;
	fullName: string;
	shortName?: string;
	location?: Address | LatLong | string;
}

export interface Park extends Destination {
	url: string;
	name: string;
	parkCode: string;
	designation: string;
	description: string;
	latLong: string;
	states: string;
	images?: Array<Image>;
}

export interface Image {
	credit: string;
	title: string;
	altText: string;
	caption: string;
	url: string;
}

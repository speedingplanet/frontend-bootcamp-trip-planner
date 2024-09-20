export interface Trip {
	id: number;
	name: string;
	destination?: string | Location;
	address?: Address;
	duration?: number;
	startDate?: Date;
	endDate?: Date;
	organizer: User;
	// Always participants, but the array might be empty
	participants: User[];

	// Always comments, but the array might be empty
	comments: Comment[];
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
	friends: User[];
	trips: Trip[];
}

/*
Location / Destination?
  - id
  - name
	- position (latitude/longitude)
  - Address
*/

/*
Comment
	- id
	- user
	- trip
	- replyTo

*/

interface Event {
	id: number;
	name: string;
	notes: string;
	banner_url: string;
	type: number;
	min?: number;
	max?: number;
}

interface CreateEvent {
	name: string;
	notes: string;
	banner_url: string;
	type: number;
	min?: number;
	max?: number;
}

interface UpdateEvent {
	id: number;
	name: string;
	notes: string;
	banner_url: string;
	type: number;
	min: number;
	max: number;
}

export { Event, CreateEvent, UpdateEvent };

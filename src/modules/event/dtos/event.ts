interface Event {
	id: number;
	name: string;
	notes: string;
	banner_url: string;
	rules_url: string;
	type: number;
	min?: number;
	max?: number;
	limit?: number;
}

interface CreateEvent {
	name: string;
	notes: string;
	banner_url: string;
	rules_url: string;
	type: number;
	min?: number;
	max?: number;
	limit?: number;
}

interface UpdateEvent {
	id: number;
	name: string;
	notes: string;
	banner_url: string;
	rules_url: string;
	type: number;
	min: number;
	max: number;
	limit?: number;
}

export { Event, CreateEvent, UpdateEvent };

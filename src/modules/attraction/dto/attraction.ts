interface Attraction {
	id: number;
	name: string;
	description: string;
	banner_url: string | null;
}

interface CreateAttraction {
	name: string;
	description: string;
	banner_url?: string;
}

interface UpdateAttraction {
	id: number;
	name: string;
	description: string;
	banner_url?: string;
}

export { Attraction, CreateAttraction, UpdateAttraction };

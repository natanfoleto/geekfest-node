interface Game {
	id: number;
	name: string;
	device: string;
	modality: string;
	schedules: string;
	banner_url: string;
}

interface CreateGame {
	name: string;
	device: string;
	modality: string;
	schedules: string;
	banner_url: string;
}

interface UpdateGame {
	id: number;
	name: string;
	device: string;
	modality: string;
	schedules: string;
	banner_url: string;
}

export { Game, CreateGame, UpdateGame };

interface Team {
	id: number;
	name: string;
	id_event: number;
	id_user: number;
}

interface CreateTeam {
	name: string;
	id_event: number;
	id_user: number;
}

interface UpdateTeam {
	id: number;
	name: string;
	id_event: number;
}

export { Team, CreateTeam, UpdateTeam };

interface Associate {
	id_team: number;
	id_user: number;
}

interface CreateUserTeam {
	id_team: number;
	id_user: number;
	nickname: string;
}

export { CreateUserTeam, Associate };

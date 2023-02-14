interface Associate {
	id_quest: number;
	id_user: number;
	collectd: boolean;
}

interface CreateUserQuest {
	id_quest: number;
	id_user: number;
}

interface IFindByUserIdResponse {
	id: number;
	users: {
		id: number;
		username: string;
		name: string;
	};
	quests: {
		id: number;
		name: string;
		objective: string;
		amount: number;
	};
}

export { Associate, CreateUserQuest, IFindByUserIdResponse };

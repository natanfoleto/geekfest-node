interface Quest {
	id: number;
	name: string;
	objective: string;
	amount: number;
}

interface CreateQuest {
	name: string;
	objective: string;
	amount: number;
}

interface UpdateQuest {
	id: number;
	name: string;
	objective: string;
	amount: number;
}

export { Quest, CreateQuest, UpdateQuest };

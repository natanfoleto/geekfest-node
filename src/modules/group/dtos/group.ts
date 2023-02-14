interface Group {
	id: number;
	name: string;
}

interface CreateGroup {
	name: string;
}

interface UpdateGroup {
	id: number;
	name: string;
}

export { Group, CreateGroup, UpdateGroup };

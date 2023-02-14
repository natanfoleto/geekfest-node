interface Permission {
	id: number;
	name: string;
	lore: string;
	type: string;
}

interface CreatePermission {
	name: string;
	lore: string;
	type: string;
}

interface UpdatePermission {
	id: number;
	name: string;
	lore: string;
	type: string;
}

export { Permission, CreatePermission, UpdatePermission };

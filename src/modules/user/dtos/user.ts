interface User {
	id: number;
	username: string;
	name: string;
	birth_date: Date;
	phone: string;
	password_hash?: string;
	password_salt?: string;
	created_at: Date;
	id_group?: number;
}

interface CreateUser {
	username: string;
	name: string;
	birth_date: Date;
	password_hash: string;
	password_salt: string;
	id_group?: number;
}

interface UpdateUser {
	id: number;
	name: string;
	phone: string;
	id_group: number;
}

export { User, CreateUser, UpdateUser };

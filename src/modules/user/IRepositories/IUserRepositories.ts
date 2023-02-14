import { User, CreateUser, UpdateUser } from '@modules/user/dtos/user';

interface IUserRepositories {
	create(data: CreateUser): Promise<User>;
	countByUsername(username: string): Promise<number>;
	findAll(): Promise<User[]>;
	findById(id: number): Promise<User>;
	findByUsername(username: string): Promise<User>;
	delete(id: number): Promise<void>;
	countById(id: number): Promise<number>;
	updateUser(data: UpdateUser): Promise<void>;
	patchPassword(
		id: number,
		password_hash: string,
		password_salt: string
	): Promise<void>;
}

export { IUserRepositories };

import prisma from '@libs/prismaClient';

import { User, CreateUser, UpdateUser } from '@modules/user/dtos/user';

import { IUserRepositories } from '@modules/user/IRepositories/IUserRepositories';

class UserRepositories implements IUserRepositories {
	async create(data: CreateUser): Promise<User> {
		return prisma.users.create({
			data,
			select: {
				id: true,
				name: true,
				username: true,
				birth_date: true,
				phone: true,
				created_at: true,
			},
		});
	}

	async countById(id: number): Promise<number> {
		return prisma.users.count({
			where: { id },
		});
	}

	async countByUsername(username: string): Promise<number> {
		return prisma.users.count({
			where: { username },
		});
	}

	async findAll(): Promise<User[]> {
		return prisma.users.findMany({
			select: {
				id: true,
				name: true,
				username: true,
				phone: true,
				id_group: true,
				group: { select: { name: true } },
				birth_date: true,
				created_at: true,
			},
		});
	}

	async findById(id: number): Promise<User> {
		return prisma.users.findFirst({
			where: { id },
			select: {
				id: true,
				name: true,
				username: true,
				phone: true,
				id_group: true,
				group: { select: { name: true } },
				birth_date: true,
				created_at: true,
			},
		});
	}

	async findByUsername(username: string): Promise<User> {
		return prisma.users.findFirst({
			where: { username },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.users.delete({
			where: { id },
		});
	}

	async updateUser({ id, name, phone, id_group }: UpdateUser): Promise<void> {
		await prisma.users.update({
			where: { id },
			data: { name, phone, id_group },
		});
	}

	async patchPassword(
		id: number,
		password_hash: string,
		password_salt: string
	): Promise<void> {
		await prisma.users.update({
			where: { id },
			data: {
				password_hash,
				password_salt,
			},
		});
	}
}

export { UserRepositories };

import prisma from '@libs/prismaClient';

import { Group, CreateGroup, UpdateGroup } from '@modules/group/dtos/group';

import { IGroupRepositories } from '@modules/group/IRepositories/IGroupRepositories';

class GroupRepositories implements IGroupRepositories {
	async create(data: CreateGroup): Promise<Group> {
		return prisma.groups.create({
			data,
		});
	}

	async countById(id: number): Promise<number> {
		return prisma.groups.count({
			where: { id },
		});
	}

	async countByName(name: string): Promise<number> {
		return prisma.groups.count({
			where: { name },
		});
	}

	async findAll(): Promise<Group[]> {
		return prisma.groups.findMany();
	}

	async findById(id: number): Promise<Group> {
		return prisma.groups.findFirst({
			where: { id },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.groups.delete({
			where: { id },
		});
	}

	async updateGroup({ id, name }: UpdateGroup): Promise<void> {
		await prisma.groups.update({
			where: { id },
			data: { name },
		});
	}
}

export { GroupRepositories };

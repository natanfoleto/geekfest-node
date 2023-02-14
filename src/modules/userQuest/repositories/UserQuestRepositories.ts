import prisma from '@libs/prismaClient';

import {
	CreateUserQuest,
	IFindByUserIdResponse,
} from '@modules/userQuest/dtos/userQuest';
import { IUserQuestRepositories } from '@modules/userQuest/IRepositories/IUserQuestRepositories';

class UserQuestRepositories implements IUserQuestRepositories {
	async findByUserId(id: number): Promise<any> {
		return prisma.user_quest.findMany({
			where: { id_user: id },
			select: {
				id: true,
				users: {
					select: {
						id: true,
						username: true,
						name: true,
					},
				},
				quests: true,
			},
		});
	}

	async findByQuestId(id: number): Promise<IFindByUserIdResponse[]> {
		return prisma.user_quest.findMany({
			where: { id_quest: id },
			select: {
				id: true,
				users: {
					select: {
						id: true,
						username: true,
						name: true,
					},
				},
				quests: true,
			},
		});
	}

	async count({ id_user, id_quest }): Promise<number> {
		return prisma.user_quest.count({
			where: { AND: { id_user, id_quest } },
		});
	}

	async create({ id_quest, id_user }: CreateUserQuest): Promise<void> {
		await prisma.user_quest.create({
			data: { id_quest, id_user },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.user_quest.deleteMany({
			where: { id },
		});
	}

	async deleteByUser(id: number): Promise<void> {
		await prisma.user_quest.deleteMany({
			where: { id_user: id },
		});
	}
}

export { UserQuestRepositories };

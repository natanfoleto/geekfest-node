import prisma from '@libs/prismaClient';
import { CreateQuest, Quest, UpdateQuest } from '@modules/quest/dto/quest';
import { IQuestRepositories } from '@modules/quest/IRepositories/IQuestRepositories';

class QuestRepositories implements IQuestRepositories {
	async findAll(): Promise<Quest[]> {
		return prisma.quests.findMany();
	}

	async findById(id: number): Promise<Quest> {
		return prisma.quests.findFirst({
			where: { id },
		});
	}

	async countByName(name: string): Promise<number> {
		return prisma.quests.count({
			where: { name },
		});
	}

	async create(data: CreateQuest): Promise<Quest> {
		return prisma.quests.create({
			data,
		});
	}

	async update({ id, ...data }: UpdateQuest): Promise<void> {
		await prisma.quests.update({
			where: { id },
			data,
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.quests.delete({ where: { id } });
	}
}

export { QuestRepositories };

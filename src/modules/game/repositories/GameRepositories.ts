import prisma from '@libs/prismaClient';

import { Game, CreateGame, UpdateGame } from '@modules/game/dtos/game';

import { IGameRepositories } from '@modules/game/IRepositories/IGameRepositories';

class GameRepositories implements IGameRepositories {
	async create(data: CreateGame): Promise<Game> {
		return prisma.games.create({ data });
	}

	async countById(id: number): Promise<number> {
		return prisma.games.count({
			where: { id },
		});
	}

	async findById(id: number): Promise<Game> {
		return prisma.games.findFirst({
			where: { id },
		});
	}

	async findAll(): Promise<Game[]> {
		return prisma.games.findMany();
	}

	async update({
		id,
		name,
		device,
		modality,
		schedules,
		banner_url,
	}: UpdateGame): Promise<Game> {
		return prisma.games.update({
			where: { id },
			data: { name, device, modality, schedules, banner_url },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.games.delete({
			where: { id },
		});
	}
}

export { GameRepositories };

import prisma from '@libs/prismaClient';
import { CreateTeam, Team, UpdateTeam } from '@modules/team/dto/team';
import { ITeamRepositories } from '@modules/team/IRepositories/ITeamRepositories';

class TeamRepositories implements ITeamRepositories {
	async findAll(): Promise<Team[]> {
		return prisma.teams.findMany();
	}

	async findById(id: number): Promise<any> {
		return prisma.teams.findFirst({
			where: { id },
			select: {
				id: true,
				name: true,
				event: true,
				user: true,
				user_team: {
					select: {
						id: true,
						nickname: true,
						user: true,
					},
				},
			},
		});
	}

	async findByUserId(id: number): Promise<any> {
		return prisma.teams.findMany({
			where: { user: { id } },
			select: {
				id: true,
				name: true,
				event: true,
				user: true,
				user_team: {
					select: {
						id: true,
						nickname: true,
						user: true,
					},
				},
			},
		});
	}

	async countByName(name: string): Promise<number> {
		return prisma.teams.count({
			where: { name },
		});
	}

	async countByEventName(name: string): Promise<number> {
		return prisma.teams.count({
			where: { event: { name } },
		});
	}

	async create(data: CreateTeam): Promise<Team> {
		return prisma.teams.create({
			data,
		});
	}

	async update({ id, ...data }: UpdateTeam): Promise<void> {
		await prisma.teams.update({
			where: { id },
			data,
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.teams.delete({ where: { id } });
	}
}

export { TeamRepositories };

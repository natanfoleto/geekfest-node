import prisma from '@libs/prismaClient';

import { IUserTeamRepositories } from '@modules/userTeam/IRepositories/IUserTeamRepositories';
import { CreateUserTeam } from '@modules/userTeam/dtos/userTeam';
import { TeamRepositories } from '@modules/team/repositories/TeamRepositories';
import { UserRepositories } from '@modules/user/repositories/UserRepositories';

class UserTeamRepositories implements IUserTeamRepositories {
	teamRepositories: TeamRepositories;
	userRepositories: UserRepositories;

	constructor(
		teamRepositories = new TeamRepositories(),
		userRepositories = new UserRepositories()
	) {
		this.teamRepositories = teamRepositories;
		this.userRepositories = userRepositories;
	}

	async findByUserUserId(id: number): Promise<any> {
		return prisma.user_team.findMany({
			where: { user: { id } },
			select: {
				id: true,
				nickname: true,
				team: {
					select: {
						name: true,
						event: true,
						user: true,
					},
				},
			},
		});
	}

	async findByUserName(name: string): Promise<any> {
		return prisma.user_team.findMany({
			where: { user: { name: { contains: name } } },
			select: {
				id: true,
				nickname: true,
				team: {
					select: {
						name: true,
						event: true,
						user: true,
					},
				},
			},
		});
	}

	async findByUserUsername(username: string): Promise<any> {
		return prisma.user_team.findMany({
			where: { user: { username: { contains: username } } },
			select: {
				id: true,
				nickname: true,
				team: {
					select: {
						name: true,
						event: true,
						user: true,
					},
				},
			},
		});
	}

	async findByTeamName(name: string): Promise<any> {
		return prisma.user_team.findMany({
			where: { team: { name: { contains: name } } },
			select: {
				id: true,
				nickname: true,
				user: {
					select: {
						id: true,
						name: true,
						username: true,
						phone: true,
						birth_date: true,
					},
				},
			},
		});
	}

	async count({ id_user, id_team }): Promise<number> {
		return prisma.user_team.count({
			where: { AND: { id_user, id_team } },
		});
	}

	async create({ id_user, id_team, nickname }: CreateUserTeam): Promise<void> {
		await prisma.user_team.create({
			data: { id_team, id_user, nickname },
		});
	}

	async updateNickname({ id, nickname }): Promise<void> {
		await prisma.user_team.updateMany({
			where: { id },
			data: { nickname },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.user_team.deleteMany({
			where: { id },
		});
	}

	async deleteByUser(id: number): Promise<void> {
		await prisma.user_team.deleteMany({
			where: { user: { id } },
		});
	}

	async deleteByTeam(id: number): Promise<void> {
		await prisma.user_team.deleteMany({
			where: { team: { id } },
		});
	}
}

export { UserTeamRepositories };

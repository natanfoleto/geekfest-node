import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { TeamRepositories } from '@modules/team/repositories/TeamRepositories';
import { UserTeamRepositories } from '@modules/userTeam/repositories/UserTeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id_team: number;
	users: {
		id_user: number;
		nickname: string;
	}[];
}

class UpdateUserTeamUseCase {
	private userRepositories: UserRepositories;
	private teamRepositories: TeamRepositories;
	private userTeamRepositories: UserTeamRepositories;

	constructor(
		userRepositories = new UserRepositories(),
		teamRepositories = new TeamRepositories(),
		userTeamRepositories = new UserTeamRepositories()
	) {
		this.userRepositories = userRepositories;
		this.teamRepositories = teamRepositories;
		this.userTeamRepositories = userTeamRepositories;
	}

	async execute({ id_team, users }: IRequest): Promise<any> {
		try {
			const teamFound = await this.teamRepositories.findById(id_team);

			if (!teamFound) {
				return new AppError({
					message: 'Time não encontrado',
				});
			}

			const usersFound = await this.userRepositories.findAll();

			const ids = usersFound.map((user) => user.id);

			const found = users.map((user) => {
				const userExists = ids.find((item) => item === user.id_user);

				if (!userExists) return user;

				return null;
			});

			const notFound = found.filter((i) => i);

			if (notFound.length > 0)
				return new AppError({
					message: `Os usuários com os id's ${notFound} não existem.`,
				});

			await this.userTeamRepositories.deleteByTeam(id_team);

			users.forEach(async (user) => {
				await this.userTeamRepositories.create({
					id_team,
					id_user: user.id_user,
					nickname: user.nickname,
				});
			});

			return new AppResponse({
				message: 'Usuários vinculados ao time com sucesso!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateUserTeamUseCase };

import { TeamRepositories } from '@modules/team/repositories/TeamRepositories';
import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	name: string;
	id_event: number;
	id_user: number;
}

class CreateTeamUseCase {
	private teamRepositories: TeamRepositories;
	private eventRepositories: EventRepositories;
	private userRepositories: UserRepositories;

	constructor(
		teamRepositories = new TeamRepositories(),
		eventRepositories = new EventRepositories(),
		userRepositories = new UserRepositories()
	) {
		this.teamRepositories = teamRepositories;
		this.eventRepositories = eventRepositories;
		this.userRepositories = userRepositories;
	}

	async execute({ name, id_event, id_user }: IRequest): Promise<any> {
		try {
			const teamFound = await this.teamRepositories.countByName(name);

			if (teamFound) {
				return new AppError({
					message: 'Um time com este nome já existe!',
				});
			}

			const userFound = await this.userRepositories.countById(id_user);

			if (!userFound) {
				return new AppError({
					message: 'Usuário não encontrado',
				});
			}

			const eventFound = await this.eventRepositories.findById(id_event);

			if (!eventFound) {
				return new AppError({
					message: 'Evento não encontrado',
				});
			}

			const team = await this.teamRepositories.create({
				name,
				id_event,
				id_user,
			});

			return new AppResponse({
				message: 'Time cadastrado com sucesso!',
				data: team,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateTeamUseCase };

import { TeamRepositories } from '@modules/team/repositories/TeamRepositories';
import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
	name: string;
	id_event: number;
}

class UpdateTeamUseCase {
	private teamRepositories: TeamRepositories;
	private eventRepositories: EventRepositories;

	constructor(
		teamRepositories = new TeamRepositories(),
		eventRepositories = new EventRepositories()
	) {
		this.teamRepositories = teamRepositories;
		this.eventRepositories = eventRepositories;
	}

	async execute({ id, name, id_event }: IRequest): Promise<any> {
		try {
			const eventFound = await this.eventRepositories.findById(id_event);

			if (!eventFound) {
				return new AppError({
					message: 'Evento não encontrado',
				});
			}

			await this.teamRepositories.update({
				id,
				name,
				id_event,
			});

			return new AppResponse({
				message: 'Time atualizado com sucesso!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateTeamUseCase };

import { TeamRepositories } from '@modules/team/repositories/TeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteTeamUseCase {
	private teamRepositories: TeamRepositories;

	constructor(teamRepositories = new TeamRepositories()) {
		this.teamRepositories = teamRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.teamRepositories.delete(id);

			return new AppResponse({
				message: 'Time deletado com sucesso!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteTeamUseCase };

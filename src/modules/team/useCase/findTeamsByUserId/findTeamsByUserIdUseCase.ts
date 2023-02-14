import { TeamRepositories } from '@modules/team/repositories/TeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class FindTeamsByUserIdUseCase {
	private teamRepositories: TeamRepositories;

	constructor(teamRepositories = new TeamRepositories()) {
		this.teamRepositories = teamRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const team = await this.teamRepositories.findByUserId(id);

			return new AppResponse({
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

export { FindTeamsByUserIdUseCase };

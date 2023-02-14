import { TeamRepositories } from '@modules/team/repositories/TeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

class FindAllTeamsUseCase {
	private teamRepositories: TeamRepositories;

	constructor(teamRepositories = new TeamRepositories()) {
		this.teamRepositories = teamRepositories;
	}

	async execute(): Promise<any> {
		try {
			const teams = await this.teamRepositories.findAll();

			return new AppResponse({
				data: teams,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindAllTeamsUseCase };

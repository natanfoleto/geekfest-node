import { UserTeamRepositories } from '@modules/userTeam/repositories/UserTeamRepositories';
import { AppResponse } from '@shared/answers/AppResponse';
import { AppError } from '@shared/answers/AppError';

interface IRequest {
	username: string;
}

class FindByUsernameUseCase {
	userTeamRepositories: UserTeamRepositories;

	constructor(userTeamRepositories = new UserTeamRepositories()) {
		this.userTeamRepositories = userTeamRepositories;
	}

	async execute({ username }: IRequest): Promise<any> {
		try {
			const userTeam = await this.userTeamRepositories.findByUserUsername(
				username
			);

			return new AppResponse({ data: userTeam });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindByUsernameUseCase };

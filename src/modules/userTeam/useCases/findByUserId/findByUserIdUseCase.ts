import { UserTeamRepositories } from '@modules/userTeam/repositories/UserTeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class FindByUserIdUseCase {
	userTeamRepositories: UserTeamRepositories;

	constructor(userTeamRepositories = new UserTeamRepositories()) {
		this.userTeamRepositories = userTeamRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const userTeam = await this.userTeamRepositories.findByUserUserId(id);

			return new AppResponse({
				data: userTeam,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindByUserIdUseCase };

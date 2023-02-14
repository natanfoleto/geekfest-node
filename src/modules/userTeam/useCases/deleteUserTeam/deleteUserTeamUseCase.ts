import { UserTeamRepositories } from '@modules/userTeam/repositories/UserTeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteUserTeamUseCase {
	userTeamRepositories: UserTeamRepositories;

	constructor(userTeamRepositories = new UserTeamRepositories()) {
		this.userTeamRepositories = userTeamRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.userTeamRepositories.delete(id);

			return new AppResponse({
				message: 'Você saiu do time!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteUserTeamUseCase };

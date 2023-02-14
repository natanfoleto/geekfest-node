import { UserTeamRepositories } from '@modules/userTeam/repositories/UserTeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteByTeamUseCase {
	userTeamRepositories: UserTeamRepositories;

	constructor(userEventRepositories = new UserTeamRepositories()) {
		this.userTeamRepositories = userEventRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.userTeamRepositories.deleteByTeam(id);

			return new AppResponse({
				message: 'Time desvinculado a todos os usuários!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteByTeamUseCase };

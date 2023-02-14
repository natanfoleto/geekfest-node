import { UserTeamRepositories } from '@modules/userTeam/repositories/UserTeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteByUserUseCase {
	userTeamRepositories: UserTeamRepositories;

	constructor(userTeamRepositories = new UserTeamRepositories()) {
		this.userTeamRepositories = userTeamRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.userTeamRepositories.deleteByUser(id);

			return new AppResponse({
				message: 'Usuário desvinculado a todos os times!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteByUserUseCase };

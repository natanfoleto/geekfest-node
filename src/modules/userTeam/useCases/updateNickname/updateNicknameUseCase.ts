import { UserTeamRepositories } from '@modules/userTeam/repositories/UserTeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
	nickname: string;
}

class UpdateNicknameUseCase {
	private userTeamRepositories: UserTeamRepositories;

	constructor(userTeamRepositories = new UserTeamRepositories()) {
		this.userTeamRepositories = userTeamRepositories;
	}

	async execute({ id, nickname }: IRequest): Promise<any> {
		try {
			await this.userTeamRepositories.updateNickname({ id, nickname });

			return new AppResponse({
				message: 'Nickname atualizado com sucesso!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toSring(),
			});
		}
	}
}

export { UpdateNicknameUseCase };

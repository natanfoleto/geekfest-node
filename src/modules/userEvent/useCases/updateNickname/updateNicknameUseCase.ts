import { UserEventRepositories } from '@modules/userEvent/repositories/UserEventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
	nickname: string;
}

class UpdateNicknameUseCase {
	private userEventRepositories: UserEventRepositories;

	constructor(userEventRepositories = new UserEventRepositories()) {
		this.userEventRepositories = userEventRepositories;
	}

	async execute({ id, nickname }: IRequest): Promise<any> {
		try {
			await this.userEventRepositories.updateNickname({ id, nickname });

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

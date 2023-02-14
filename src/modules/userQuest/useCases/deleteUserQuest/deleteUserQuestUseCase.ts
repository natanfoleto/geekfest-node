import { UserQuestRepositories } from '@modules/userQuest/repositories/UserQuestRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteUserQuestUseCase {
	userQuestRepositories: UserQuestRepositories;

	constructor(userQuestRepositories = new UserQuestRepositories()) {
		this.userQuestRepositories = userQuestRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.userQuestRepositories.delete(id);

			return new AppResponse({
				message: 'Este usuário não tem mais essa missão completa!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteUserQuestUseCase };

import { UserQuestRepositories } from '@modules/userQuest/repositories/UserQuestRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class FindByUserIdUseCase {
	userQuestRepositories: UserQuestRepositories;

	constructor(userQuestRepositories = new UserQuestRepositories()) {
		this.userQuestRepositories = userQuestRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const usersQuests = await this.userQuestRepositories.findByUserId(id);

			return new AppResponse({
				data: usersQuests,
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

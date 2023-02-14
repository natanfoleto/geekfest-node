import { IFindByUserIdResponse } from '@modules/userQuest/dtos/userQuest';
import { UserQuestRepositories } from '@modules/userQuest/repositories/UserQuestRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class GetAmountBadgesByUserIdUseCase {
	userQuestRepositories: UserQuestRepositories;

	constructor(userQuestRepositories = new UserQuestRepositories()) {
		this.userQuestRepositories = userQuestRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const usersQuests: IFindByUserIdResponse[] =
				await this.userQuestRepositories.findByUserId(id);

			const sum = usersQuests.reduce(
				(accumulator, value) => accumulator + value.quests.amount,
				0
			);

			return new AppResponse({
				data: {
					amount: sum,
				},
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { GetAmountBadgesByUserIdUseCase };

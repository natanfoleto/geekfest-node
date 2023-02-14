import { QuestRepositories } from '@modules/quest/repositories/questRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteQuestUseCase {
	private questRepositories: QuestRepositories;

	constructor(questRepositories = new QuestRepositories()) {
		this.questRepositories = questRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.questRepositories.delete(id);

			return new AppResponse({
				message: 'Quest deletada com sucesso!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteQuestUseCase };

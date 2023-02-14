import { QuestRepositories } from '@modules/quest/repositories/questRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
	name: string;
	objective: string;
	amount: number;
}

class UpdateQuestUseCase {
	private questRepositories: QuestRepositories;

	constructor(questRepositories = new QuestRepositories()) {
		this.questRepositories = questRepositories;
	}

	async execute({ id, name, objective, amount }: IRequest): Promise<any> {
		try {
			await this.questRepositories.update({
				id,
				name,
				objective,
				amount,
			});

			return new AppResponse({
				message: 'Quest atualizada com sucesso!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateQuestUseCase };

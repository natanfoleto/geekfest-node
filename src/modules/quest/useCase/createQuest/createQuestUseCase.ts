import { QuestRepositories } from '@modules/quest/repositories/questRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	name: string;
	objective: string;
	amount: number;
}

class CreateQuestUseCase {
	private questRepositories: QuestRepositories;

	constructor(questRepositories = new QuestRepositories()) {
		this.questRepositories = questRepositories;
	}

	async execute({ name, objective, amount }: IRequest): Promise<any> {
		try {
			const questFound = await this.questRepositories.countByName(name);

			if (questFound) {
				return new AppError({
					message: 'Esta quest ja existe!',
				});
			}

			const quest = await this.questRepositories.create({
				name,
				objective,
				amount,
			});

			return new AppResponse({
				message: 'Quest cadastrada com sucesso!',
				data: quest,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateQuestUseCase };

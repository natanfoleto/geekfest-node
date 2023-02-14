import { QuestRepositories } from '@modules/quest/repositories/questRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

class FindAllQuestsUseCase {
	private questRepositories: QuestRepositories;

	constructor(questRepositories = new QuestRepositories()) {
		this.questRepositories = questRepositories;
	}

	async execute(): Promise<any> {
		try {
			const quests = await this.questRepositories.findAll();

			return new AppResponse({
				data: quests,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindAllQuestsUseCase };

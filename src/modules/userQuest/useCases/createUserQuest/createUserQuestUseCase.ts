import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { QuestRepositories } from '@modules/quest/repositories/questRepositories';
import { UserQuestRepositories } from '@modules/userQuest/repositories/UserQuestRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id_quest: number;
	id_user: number;
}

class CreateUserQuestUseCase {
	private userRepositories: UserRepositories;
	private questRepositories: QuestRepositories;
	private userQuestRepositories: UserQuestRepositories;

	constructor(
		userRepositories = new UserRepositories(),
		questRepositories = new QuestRepositories(),
		userQuestRepositories = new UserQuestRepositories()
	) {
		this.userRepositories = userRepositories;
		this.questRepositories = questRepositories;
		this.userQuestRepositories = userQuestRepositories;
	}

	async execute({ id_quest, id_user }: IRequest): Promise<any> {
		try {
			const userFound = await this.userRepositories.countById(id_user);

			if (!userFound) {
				return new AppError({
					message: 'Usuário não encontrado',
				});
			}

			const questFound = await this.questRepositories.findById(id_quest);

			if (!questFound) {
				return new AppError({
					message: 'Missão não encontrado',
				});
			}

			const associateFound = await this.userQuestRepositories.count({
				id_user,
				id_quest,
			});

			if (associateFound) {
				return new AppError({
					message: 'Usuário ja completou essa missão!',
				});
			}

			const userQuest = await this.userQuestRepositories.create({
				id_quest,
				id_user,
			});

			return new AppResponse({
				message: 'Missão completa com sucesso!',
				data: userQuest,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateUserQuestUseCase };

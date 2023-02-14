import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GameRepositories } from '@modules/game/repositories/GameRepositories';

interface IRequest {
	id: number;
}

class FindGameByIdUseCase {
	gameRepositories: GameRepositories;

	constructor(gameRepositories = new GameRepositories()) {
		this.gameRepositories = gameRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const game = await this.gameRepositories.findById(id);

			if (!game)
				return new AppError({
					message: `Nenhum game encontrado com esse id(${id})`,
				});

			return new AppResponse({ data: game });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindGameByIdUseCase };

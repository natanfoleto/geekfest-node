import { GameRepositories } from '@modules/game/repositories/GameRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

class FindAllGamesUseCase {
	private gameRepositories: GameRepositories;

	constructor(gameRepositories = new GameRepositories()) {
		this.gameRepositories = gameRepositories;
	}

	async execute(): Promise<any> {
		try {
			const games = await this.gameRepositories.findAll();

			const list = games.map((game) => ({
				...game,
				schedules: JSON.parse(game.schedules),
			}));

			return new AppResponse({
				data: list,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindAllGamesUseCase };

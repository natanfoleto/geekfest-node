import { GameRepositories } from '@modules/game/repositories/GameRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	name: string;
	device: string;
	modality: string;
	schedules: {
		hourStart: number;
		hourEnd: number;
	}[];
	bannerUrl: string;
}

class CreateGameUseCase {
	private gameRepositories: GameRepositories;

	constructor(gameRepositories = new GameRepositories()) {
		this.gameRepositories = gameRepositories;
	}

	async execute({
		name,
		device,
		modality,
		schedules,
		bannerUrl,
	}: IRequest): Promise<any> {
		try {
			const user = await this.gameRepositories.create({
				name,
				device,
				modality,
				schedules: JSON.stringify(schedules),
				banner_url: bannerUrl,
			});

			return new AppResponse({
				message: 'Game criado com sucesso',
				data: user,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateGameUseCase };

import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GameRepositories } from '@modules/game/repositories/GameRepositories';

interface IRequest {
	id: number;
	name: string;
	device: string;
	modality: string;
	schedules: {
		hourStart: number;
		hourEnd: number;
	}[];
	bannerUrl: string;
}

class UpdateGameUseCase {
	gameRepositories: GameRepositories;

	constructor(gameRepositories = new GameRepositories()) {
		this.gameRepositories = gameRepositories;
	}

	async execute({
		id,
		name,
		device,
		modality,
		schedules,
		bannerUrl,
	}: IRequest): Promise<any> {
		try {
			const gameFound = await this.gameRepositories.countById(id);

			if (!gameFound) return new AppError({ message: 'Game não encontrado!' });

			if (!name)
				return new AppError({ message: 'O game não pode estar vazio' });

			await this.gameRepositories.update({
				id,
				name,
				device,
				modality,
				schedules: JSON.stringify(schedules),
				banner_url: bannerUrl,
			});

			return new AppResponse({ message: 'Game atualizado com sucesso' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateGameUseCase };

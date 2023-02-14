import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { AttractionRepositories } from '@modules/attraction/repositories/AttractionRepositories';

class FindAllAttractionsUseCase {
	private attractionRepositories: AttractionRepositories;

	constructor(attractionRepositories = new AttractionRepositories()) {
		this.attractionRepositories = attractionRepositories;
	}

	async execute(): Promise<any> {
		try {
			const attractions = await this.attractionRepositories.findAll();

			return new AppResponse({
				data: attractions,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindAllAttractionsUseCase };

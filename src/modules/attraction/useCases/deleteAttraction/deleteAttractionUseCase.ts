import { AttractionRepositories } from '@modules/attraction/repositories/AttractionRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteAttractionUseCase {
	private attractionRepositories: AttractionRepositories;

	constructor(attractionRepositories = new AttractionRepositories()) {
		this.attractionRepositories = attractionRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.attractionRepositories.delete(id);

			return new AppResponse({
				message: 'Atração deletada com sucesso',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteAttractionUseCase };

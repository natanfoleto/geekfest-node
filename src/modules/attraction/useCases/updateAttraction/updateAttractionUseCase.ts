import { AttractionRepositories } from '@modules/attraction/repositories/AttractionRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
	name: string;
	description: string;
	bannerUrl?: string;
}

class UpdateAttractionUseCase {
	attractionRepositories: AttractionRepositories;

	constructor(attractionRepositories = new AttractionRepositories()) {
		this.attractionRepositories = attractionRepositories;
	}

	async execute({ id, name, description, bannerUrl }: IRequest): Promise<any> {
		try {
			await this.attractionRepositories.update({
				id,
				name,
				description,
				banner_url: bannerUrl,
			});

			return new AppResponse({ message: 'Atração atualizada com sucesso' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateAttractionUseCase };

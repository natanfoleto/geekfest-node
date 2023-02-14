import { AttractionRepositories } from '@modules/attraction/repositories/AttractionRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	name: string;
	description: string;
	bannerUrl?: string;
}

export class CreateAttractionUseCase {
	private attractionRepositories: AttractionRepositories;

	constructor(attractionRepositories = new AttractionRepositories()) {
		this.attractionRepositories = attractionRepositories;
	}

	async execute({ name, description, bannerUrl }: IRequest): Promise<any> {
		try {
			const attractionFound = await this.attractionRepositories.countByName(
				name
			);

			if (attractionFound) {
				return new AppError({
					message: 'Já existe uma atração com este nome',
				});
			}

			const attraction = await this.attractionRepositories.create({
				name,
				description,
				banner_url: bannerUrl,
			});

			return new AppResponse({
				message: 'Atração criada com sucesso',
				data: attraction,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { AttractionRepositories };

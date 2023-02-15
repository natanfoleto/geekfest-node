import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
	name: string;
	notes: string;
	bannerUrl: string;
	rulesUrl: string;
	type: number;
	min: number;
	max: number;
}

class UpdateEventUseCase {
	eventRepositories: EventRepositories;

	constructor(eventRepositories = new EventRepositories()) {
		this.eventRepositories = eventRepositories;
	}

	async execute({
		id,
		name,
		notes,
		bannerUrl,
		rulesUrl,
		type,
		min,
		max,
	}: IRequest): Promise<any> {
		try {
			if (min > max) {
				return new AppError({
					message: 'O número mínimo não pode ser maior que o máximo',
				});
			}

			const eventFound = await this.eventRepositories.countById(id);

			if (!eventFound)
				return new AppError({ message: 'Evento não encontrado!' });

			if (!name)
				return new AppError({ message: 'O evento não pode estar vazio' });

			await this.eventRepositories.update({
				id,
				name,
				notes,
				banner_url: bannerUrl,
				rules_url: rulesUrl,
				type,
				min,
				max,
			});

			return new AppResponse({ message: 'Evento atualizado com sucesso' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateEventUseCase };

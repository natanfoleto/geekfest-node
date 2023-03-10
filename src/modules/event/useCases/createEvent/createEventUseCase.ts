import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	name: string;
	notes: string;
	bannerUrl: string;
	rulesUrl: string;
	type: number;
	min: number;
	max: number;
	limit: number;
}

class CreateEventUseCase {
	private eventRepositories: EventRepositories;

	constructor(eventRepositories = new EventRepositories()) {
		this.eventRepositories = eventRepositories;
	}

	async execute({
		name,
		notes,
		bannerUrl,
		rulesUrl,
		type,
		min,
		max,
		limit,
	}: IRequest): Promise<any> {
		try {
			if (min > max) {
				return new AppError({
					message: 'O número mínimo não pode ser maior que o máximo',
				});
			}

			const eventFound = await this.eventRepositories.countByName(name);

			if (eventFound)
				return new AppError({
					message: 'Ja existe um evento com este nome',
				});

			const event = await this.eventRepositories.create({
				name,
				notes,
				banner_url: bannerUrl,
				rules_url: rulesUrl,
				type,
				min,
				max,
				limit,
			});

			return new AppResponse({
				message: 'Evento criado com sucesso',
				data: event,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateEventUseCase };

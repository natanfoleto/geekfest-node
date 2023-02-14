import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class FindEventByIdUseCase {
	eventRepositories: EventRepositories;

	constructor(eventRepositories = new EventRepositories()) {
		this.eventRepositories = eventRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const event = await this.eventRepositories.findById(id);

			if (!event)
				return new AppError({
					message: `Nenhum evento encontrado com esse id(${id})`,
				});

			return new AppResponse({ data: event });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindEventByIdUseCase };

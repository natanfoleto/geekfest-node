import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteEventUseCase {
	eventRepositories: EventRepositories;

	constructor(eventRepositories = new EventRepositories()) {
		this.eventRepositories = eventRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const eventFound = await this.eventRepositories.countById(id);

			if (!eventFound)
				return new AppError({
					message: `Nenhum evento encontrado com esse id(${id})`,
				});

			await this.eventRepositories.delete(id);

			return new AppResponse({ message: 'Evento deletado com sucesso' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteEventUseCase };

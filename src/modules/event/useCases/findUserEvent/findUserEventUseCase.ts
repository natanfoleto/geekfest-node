import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

class FindUsersTeamsUseCase {
	eventRepositories: EventRepositories;

	constructor(eventRepositories = new EventRepositories()) {
		this.eventRepositories = eventRepositories;
	}

	async execute(): Promise<any> {
		try {
			const users = await this.eventRepositories.findUsersByEvent();
			const teams = await this.eventRepositories.findTeamsByEvent();

			return new AppResponse({
				data: {
					users,
					teams,
				},
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindUsersTeamsUseCase };

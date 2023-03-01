import { UserEventRepositories } from '@modules/userEvent/repositories/UserEventRepositories';
import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { TeamRepositories } from '@modules/team/repositories/TeamRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

class FindAllEventsUseCase {
	eventRepositories: EventRepositories;
	userEventRepositories: UserEventRepositories;
	teamRepositories: TeamRepositories;

	constructor(
		eventRepositories = new EventRepositories(),
		userEventRepositories = new UserEventRepositories(),
		teamRepositories = new TeamRepositories()
	) {
		this.eventRepositories = eventRepositories;
		this.userEventRepositories = userEventRepositories;
		this.teamRepositories = teamRepositories;
	}

	async execute(): Promise<any> {
		try {
			const events = await this.eventRepositories.findAll();

			const newEvents = await Promise.all(
				events.map(async (event) => {
					const countUserEvent =
						await this.userEventRepositories.countByEventName(event.name);

					const countTeamEvent = await this.teamRepositories.countByEventName(
						event.name
					);

					return {
						id: event.id,
						name: event.name,
						notes: event.notes,
						banner_url: event.banner_url,
						rules_url: event.rules_url,
						type: event.type,
						min: event.min,
						max: event.max,
						limit: event.limit,
						subscribed: countUserEvent || countTeamEvent,
					};
				})
			);

			return new AppResponse({ data: newEvents });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindAllEventsUseCase };

import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { UserEventRepositories } from '@modules/userEvent/repositories/UserEventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id_event: number;
	id_user: number;
	nickname: string;
}

class CreateUserEventUseCase {
	private userRepositories: UserRepositories;
	private eventRepositories: EventRepositories;
	private userEventRepositories: UserEventRepositories;

	constructor(
		userRepositories = new UserRepositories(),
		eventRepositories = new EventRepositories(),
		userEventRepositories = new UserEventRepositories()
	) {
		this.userRepositories = userRepositories;
		this.eventRepositories = eventRepositories;
		this.userEventRepositories = userEventRepositories;
	}

	async execute({ id_event, id_user, nickname }: IRequest): Promise<any> {
		try {
			const userFound = await this.userRepositories.countById(id_user);

			if (!userFound) {
				return new AppError({
					message: 'Usuário não encontrado',
				});
			}

			const eventFound = await this.eventRepositories.findById(id_event);

			if (!eventFound) {
				return new AppError({
					message: 'Evento não encontrado',
				});
			}

			const associateFound = await this.userEventRepositories.count({
				id_user,
				id_event,
			});

			if (associateFound) {
				return new AppError({
					message: 'Você já está inscrito neste evento',
				});
			}

			const userEvent = await this.userEventRepositories.create({
				id_event,
				id_user,
				nickname,
			});

			return new AppResponse({
				message: 'Você se inscreveu no evento com sucesso!',
				data: userEvent,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateUserEventUseCase };

import { UserEventRepositories } from '@modules/userEvent/repositories/UserEventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteByEventUseCase {
	userEventRepositories: UserEventRepositories;

	constructor(userEventRepositories = new UserEventRepositories()) {
		this.userEventRepositories = userEventRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.userEventRepositories.deleteByEvent(id);

			return new AppResponse({
				message: 'Evento desvinculado a todos os usuários!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteByEventUseCase };

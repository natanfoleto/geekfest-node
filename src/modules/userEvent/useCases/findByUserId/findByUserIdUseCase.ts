import { UserEventRepositories } from '@modules/userEvent/repositories/UserEventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class FindByUserIdUseCase {
	userEventRepositories: UserEventRepositories;

	constructor(userEventRepositories = new UserEventRepositories()) {
		this.userEventRepositories = userEventRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const userEvent = await this.userEventRepositories.findByUserUserId(id);

			return new AppResponse({
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

export { FindByUserIdUseCase };

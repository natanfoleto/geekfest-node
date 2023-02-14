import { UserEventRepositories } from '@modules/userEvent/repositories/UserEventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	name: string;
}

class FindByEventNameUseCase {
	userEventRepositories: UserEventRepositories;

	constructor(userEventRepositories = new UserEventRepositories()) {
		this.userEventRepositories = userEventRepositories;
	}

	async execute({ name }: IRequest): Promise<any> {
		try {
			const users = await this.userEventRepositories.findByEventName(name);

			return new AppResponse({
				data: users,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindByEventNameUseCase };

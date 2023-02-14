import { UserEventRepositories } from '@modules/userEvent/repositories/UserEventRepositories';
import { AppResponse } from '@shared/answers/AppResponse';
import { AppError } from '@shared/answers/AppError';

interface IRequest {
	username: string;
}

class FindByUsernameUseCase {
	userEventRepositories: UserEventRepositories;

	constructor(userEventRepositories = new UserEventRepositories()) {
		this.userEventRepositories = userEventRepositories;
	}

	async execute({ username }: IRequest): Promise<any> {
		try {
			const userEvent = await this.userEventRepositories.findByUserUsername(
				username
			);

			return new AppResponse({ data: userEvent });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindByUsernameUseCase };

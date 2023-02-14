import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

class FindAllUsersUseCase {
	private userRepositories: UserRepositories;

	constructor(userRepositories = new UserRepositories()) {
		this.userRepositories = userRepositories;
	}

	async execute(): Promise<any> {
		try {
			const users = await this.userRepositories.findAll();

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

export { FindAllUsersUseCase };

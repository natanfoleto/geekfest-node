import { UserEventRepositories } from '@modules/userEvent/repositories/UserEventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteByUserUseCase {
	userEventRepositories: UserEventRepositories;

	constructor(userEventRepositories = new UserEventRepositories()) {
		this.userEventRepositories = userEventRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.userEventRepositories.deleteByUser(id);

			return new AppResponse({
				message: 'Você se desvinculou de todos os eventos!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteByUserUseCase };

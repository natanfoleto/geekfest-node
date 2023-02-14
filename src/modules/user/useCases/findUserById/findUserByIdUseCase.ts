import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class FindUserByIdUseCase {
	private userRepositories: UserRepositories;

	constructor(userRepositories = new UserRepositories()) {
		this.userRepositories = userRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const user = await this.userRepositories.findById(id);

			if (!user)
				return new AppError({
					message: `Nenhum usuário encontrado com esse id(${id})`,
				});

			return new AppResponse({ data: user });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindUserByIdUseCase };

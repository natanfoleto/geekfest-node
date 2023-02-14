import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
}

class DeleteUserUseCase {
	private userRepositories: UserRepositories;

	constructor(userRepositories = new UserRepositories()) {
		this.userRepositories = userRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const userFound = await this.userRepositories.countById(id);

			if (!userFound)
				return new AppError({
					message: `Nenhum usuário encontrado com esse id(${id})`,
				});

			await this.userRepositories.delete(id);

			return new AppResponse({ message: 'Usuário deletado' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteUserUseCase };

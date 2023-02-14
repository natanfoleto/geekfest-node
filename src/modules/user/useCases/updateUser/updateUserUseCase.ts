import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
	name: string;
	phone: string;
	groupId: number;
}

class UpdateUserUseCase {
	private userRepositories: UserRepositories;

	constructor(userRepositories = new UserRepositories()) {
		this.userRepositories = userRepositories;
	}

	async execute({ id, name, phone, groupId }: IRequest): Promise<any> {
		try {
			const userFound = await this.userRepositories.countById(id);

			if (!userFound)
				return new AppError({
					message: `Nenhum usuário encontrado com esse id(${id})`,
				});

			await this.userRepositories.updateUser({
				id,
				name,
				phone,
				id_group: groupId,
			});

			return new AppResponse({ message: 'Usuário atualizado com sucesso' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateUserUseCase };

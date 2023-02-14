import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { encryptPassword } from '@utils/bcrypt';

interface IRequest {
	id: number;
	password: string;
	confirmPassword: string;
}

class PatchUserPasswordUseCase {
	private userRepositories: UserRepositories;

	constructor(userRepositories = new UserRepositories()) {
		this.userRepositories = userRepositories;
	}

	async execute({ id, password, confirmPassword }: IRequest): Promise<any> {
		try {
			if (password !== confirmPassword)
				return new AppError({
					message: 'As senhas não conferem',
				});

			const userFound = await this.userRepositories.countById(id);

			if (!userFound)
				return new AppError({
					message: `Nenhum usuário encontrado com esse id(${id})`,
				});

			const password_encrypt = await encryptPassword(password);

			await this.userRepositories.patchPassword(
				id,
				password_encrypt.hash,
				password_encrypt.salt
			);

			return new AppResponse({ message: 'Senha alterada com sucesso' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { PatchUserPasswordUseCase };

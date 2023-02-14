import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { encryptPassword } from '@utils/bcrypt';

interface IRequest {
	username: string;
	name: string;
	birthDate: Date;
	password: string;
	confirmPassword: string;
}

class CreateUserUseCase {
	private userRepositories: UserRepositories;

	constructor(userRepositories = new UserRepositories()) {
		this.userRepositories = userRepositories;
	}

	async execute({
		username,
		name,
		birthDate,
		password,
		confirmPassword,
	}: IRequest): Promise<any> {
		try {
			if (password !== confirmPassword)
				return new AppError({
					message: 'As senhas não conferem',
				});

			const usernameFound = await this.userRepositories.countByUsername(
				username
			);

			if (usernameFound)
				return new AppError({
					message: 'Ja existe um usuário com este username',
				});

			const password_encrypt = await encryptPassword(password);

			const user = await this.userRepositories.create({
				username,
				name,
				birth_date: new Date(birthDate),
				password_hash: password_encrypt.hash,
				password_salt: password_encrypt.salt,
			});

			return new AppResponse({
				message: 'Usuário criado com sucesso',
				data: user,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateUserUseCase };

import env from '@config/config';
import { sign } from 'jsonwebtoken';
import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { checkPassword } from '@utils/bcrypt';
import { GroupPermissionRepositories } from '@modules/groupPermission/repositories/GroupPermissionRepositories';

interface IRequest {
	username: string;
	password: string;
}

class AuthenticateUserUseCase {
	private userRepositories: UserRepositories;
	private groupPermissionRepositories: GroupPermissionRepositories;

	constructor(
		userRepositories = new UserRepositories(),
		groupPermissionRepositories = new GroupPermissionRepositories()
	) {
		this.userRepositories = userRepositories;
		this.groupPermissionRepositories = groupPermissionRepositories;
	}

	async execute({ username, password }: IRequest): Promise<any> {
		try {
			const user = await this.userRepositories.findByUsername(username);

			if (!user)
				return new AppError({
					message: 'Login ou senha incorretos',
				});

			const { id_group } = user;

			const permissionsGroup =
				await this.groupPermissionRepositories.findByGroup(id_group);

			const permissions = permissionsGroup.map(({ permission }) => {
				const { id, name, lore, type } = permission;

				return { id, name, lore, type };
			});

			const passwordMatch = await checkPassword(password, user.password_hash);

			if (!passwordMatch)
				return new AppError({
					message: 'Login ou senha incorretos',
				});

			const tokenPayload = {
				id_group,
				permissions,
				sub: user.id,
				iss: env.JWT_ISSUER,
			};

			const token = sign({ tokenPayload }, env.JWT_SECRET_TOKEN, {
				subject: user.username,
				expiresIn: env.JWT_EXPIRES_IN,
			});

			const refresh_token = sign(
				{ tokenPayload },
				env.JWT_SECRET_REFRESH_TOKEN,
				{ expiresIn: env.JWT_REFRESH_TOKEN_EXPIRES_IN }
			);

			return new AppResponse({
				message: 'Usuário logado com sucesso',
				data: {
					token,
					refresh_token,
					user: {
						id: user.id,
						id_group,
						username: user.username,
						name: user.name,
						birthDate: user.birth_date,
						phone: user.phone,
						createdAt: user.created_at,
					},
				},
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { AuthenticateUserUseCase };

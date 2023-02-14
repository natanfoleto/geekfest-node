import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { PermissionRepositories } from '@modules/permission/repositories/PermissionRepositories';

interface IRequest {
	name: string;
	lore: string;
	type: string;
}

class CreatePermissionUseCase {
	private permissionRepositories: PermissionRepositories;

	constructor(permissionRepositories = new PermissionRepositories()) {
		this.permissionRepositories = permissionRepositories;
	}

	async execute({ name, lore, type }: IRequest): Promise<any> {
		try {
			const permissionFound = await this.permissionRepositories.countByName(
				name
			);

			if (permissionFound)
				return new AppError({
					message: 'Ja existe uma permissão com este nome',
				});

			const user = await this.permissionRepositories.create({
				name,
				lore,
				type,
			});

			return new AppResponse({
				message: 'Permissão criada com sucesso',
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

export { CreatePermissionUseCase };

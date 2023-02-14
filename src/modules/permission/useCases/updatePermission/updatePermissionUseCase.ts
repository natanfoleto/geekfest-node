import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { PermissionRepositories } from '@modules/permission/repositories/PermissionRepositories';

interface IRequest {
	id: number;
	name: string;
	lore: string;
	type: string;
}

class UpdatePermissionUseCase {
	private permissionRepositories: PermissionRepositories;

	constructor(permissionRepositories = new PermissionRepositories()) {
		this.permissionRepositories = permissionRepositories;
	}

	async execute({ id, name, lore, type }: IRequest): Promise<any> {
		try {
			if (!name)
				return new AppError({
					message: 'O nome da permissão não pode estar vazio',
				});

			const permissionFound = await this.permissionRepositories.countById(id);

			if (!permissionFound)
				return new AppError({
					message: `Nenhuma permissão encontrada com esse id(${id})`,
				});

			await this.permissionRepositories.updatePermission({
				id,
				name,
				lore,
				type,
			});

			return new AppResponse({ message: 'Permissão atualizada com sucesso' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdatePermissionUseCase };

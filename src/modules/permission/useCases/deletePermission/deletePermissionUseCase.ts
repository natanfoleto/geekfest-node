import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { PermissionRepositories } from '@modules/permission/repositories/PermissionRepositories';
import { GroupPermissionRepositories } from '@modules/groupPermission/repositories/GroupPermissionRepositories';

interface IRequest {
	id: number;
}

class DeletePermissionUseCase {
	private permissionRepositories: PermissionRepositories;
	private groupPermissionRepositories: GroupPermissionRepositories;

	constructor(
		permissionRepositories = new PermissionRepositories(),
		groupPermissionRepositories = new GroupPermissionRepositories()
	) {
		this.permissionRepositories = permissionRepositories;
		this.groupPermissionRepositories = groupPermissionRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const permissionFound = await this.permissionRepositories.countById(id);

			if (!permissionFound)
				return new AppError({
					message: `Nenhuma permissão encontrada com esse id(${id})`,
				});

			const permissionAssociate =
				await this.groupPermissionRepositories.countByPermission(id);

			if (permissionAssociate)
				return new AppError({
					message: 'Essa permissão está associada a algum grupo',
				});

			await this.permissionRepositories.delete(id);

			return new AppResponse({ message: 'Permissão deletada com sucesso' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeletePermissionUseCase };

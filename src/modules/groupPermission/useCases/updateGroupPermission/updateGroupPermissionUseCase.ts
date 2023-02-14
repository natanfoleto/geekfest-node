import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupRepositories } from '@modules/group/repositories/GroupRepositories';
import { PermissionRepositories } from '@modules/permission/repositories/PermissionRepositories';
import { GroupPermissionRepositories } from '@modules/groupPermission/repositories/GroupPermissionRepositories';

interface IRequest {
	id_group: number;
	permissions: number[];
}

class UpdateGroupPermissionUseCase {
	groupRepositories: GroupRepositories;
	permissionRepositories: PermissionRepositories;
	groupPermissionRepositories: GroupPermissionRepositories;

	constructor(
		groupRepositories = new GroupRepositories(),
		permissionRepositories = new PermissionRepositories(),
		groupPermissionRepositories = new GroupPermissionRepositories()
	) {
		this.groupRepositories = groupRepositories;
		this.permissionRepositories = permissionRepositories;
		this.groupPermissionRepositories = groupPermissionRepositories;
	}

	async execute({ id_group, permissions }: IRequest): Promise<any> {
		try {
			const groupFound = await this.groupRepositories.countById(id_group);

			if (!groupFound) {
				return new AppError({
					message: 'Grupo não encontrado',
				});
			}

			const permissionsFound = await this.permissionRepositories.findAll();

			const ids = permissionsFound.map((permission) => permission.id);

			const found = permissions.map((permission) => {
				const permissionExists = ids.find((item) => item === permission);

				if (!permissionExists) return permission;

				return null;
			});

			const notFound = found.filter((i) => i);

			if (notFound.length > 0)
				return new AppError({
					message: `As permissões com os id's ${notFound} não existem.`,
				});

			await this.groupPermissionRepositories.deleteByGroup(id_group);

			permissions.forEach(async (permission) => {
				await this.groupPermissionRepositories.create({
					id_group,
					id_permission: permission,
				});
			});

			return new AppResponse({
				message: 'Permissão(ões) concedidas à este grupo com sucesso!',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateGroupPermissionUseCase };

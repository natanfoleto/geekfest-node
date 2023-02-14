import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupPermissionRepositories } from '@modules/groupPermission/repositories/GroupPermissionRepositories';

interface IRequest {
	id_group: number;
}

class FindByGroupUseCase {
	groupPermissionRepositories: GroupPermissionRepositories;

	constructor(groupPermissionRepositories = new GroupPermissionRepositories()) {
		this.groupPermissionRepositories = groupPermissionRepositories;
	}

	async execute({ id_group }: IRequest): Promise<any> {
		try {
			const permissionsGroup =
				await this.groupPermissionRepositories.findByGroup(id_group);

			const permissions = permissionsGroup.map(({ permission }) => {
				const { id, name, lore, type } = permission;

				return { id, name, lore, type };
			});

			return new AppResponse({ data: permissions });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindByGroupUseCase };

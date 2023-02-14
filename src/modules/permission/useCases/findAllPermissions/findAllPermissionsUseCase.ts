import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { PermissionRepositories } from '@modules/permission/repositories/PermissionRepositories';

class FindAllPermissionsUseCase {
	private permissionRepositories: PermissionRepositories;

	constructor(permissionRepositories = new PermissionRepositories()) {
		this.permissionRepositories = permissionRepositories;
	}

	async execute(): Promise<any> {
		try {
			const permissions = await this.permissionRepositories.findAll();

			return new AppResponse({ data: permissions });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindAllPermissionsUseCase };

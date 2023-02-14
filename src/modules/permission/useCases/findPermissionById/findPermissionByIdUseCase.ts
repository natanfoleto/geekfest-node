import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { PermissionRepositories } from '@modules/permission/repositories/PermissionRepositories';

interface IRequest {
	id: number;
}

class FindPermissionByIdUseCase {
	private permissionRepositories: PermissionRepositories;

	constructor(permissionRepositories = new PermissionRepositories()) {
		this.permissionRepositories = permissionRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const permission = await this.permissionRepositories.findById(id);

			if (!permission)
				return new AppError({
					message: `Nenhuma permissão encontrada com esse id(${id})`,
				});

			return new AppResponse({ data: permission });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindPermissionByIdUseCase };

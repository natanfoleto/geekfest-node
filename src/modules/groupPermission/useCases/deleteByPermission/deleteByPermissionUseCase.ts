import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupPermissionRepositories } from '@modules/groupPermission/repositories/GroupPermissionRepositories';

interface IRequest {
	id: number;
}

class DeleteByPermissionUseCase {
	groupPermissionRepositories: GroupPermissionRepositories;

	constructor(groupPermissionRepositories = new GroupPermissionRepositories()) {
		this.groupPermissionRepositories = groupPermissionRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.groupPermissionRepositories.deleteByPermission(id);

			return new AppResponse({
				message: 'Todos vinculos de grupos desta permissão foram excluídas',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteByPermissionUseCase };

import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupPermissionRepositories } from '@modules/groupPermission/repositories/GroupPermissionRepositories';

interface IRequest {
	id: number;
}

class DeleteByGroupUseCase {
	groupPermissionRepositories: GroupPermissionRepositories;

	constructor(groupPermissionRepositories = new GroupPermissionRepositories()) {
		this.groupPermissionRepositories = groupPermissionRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			await this.groupPermissionRepositories.deleteByGroup(id);

			return new AppResponse({
				message: 'Todos vinculos de permissões deste grupo foram excluídos',
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteByGroupUseCase };

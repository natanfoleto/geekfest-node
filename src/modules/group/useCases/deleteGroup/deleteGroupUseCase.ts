import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupRepositories } from '@modules/group/repositories/GroupRepositories';

interface IRequest {
	id: number;
}

class DeleteGroupUseCase {
	private groupRepositories: GroupRepositories;

	constructor(groupRepositories = new GroupRepositories()) {
		this.groupRepositories = groupRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const groupFound = await this.groupRepositories.countById(id);

			if (!groupFound)
				return new AppError({
					message: `Nenhum grupo encontrado com esse id(${id})`,
				});

			await this.groupRepositories.delete(id);

			return new AppResponse({ message: 'Grupo deletado' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteGroupUseCase };

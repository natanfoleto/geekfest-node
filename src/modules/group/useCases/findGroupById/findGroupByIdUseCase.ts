import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupRepositories } from '@modules/group/repositories/GroupRepositories';

interface IRequest {
	id: number;
}

class FindGroupByIdUseCase {
	private groupRepositories: GroupRepositories;

	constructor(groupRepositories = new GroupRepositories()) {
		this.groupRepositories = groupRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const group = await this.groupRepositories.findById(id);

			if (!group)
				return new AppError({
					message: `Nenhum grupo encontrado com esse id(${id})`,
				});

			return new AppResponse({ data: group });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindGroupByIdUseCase };

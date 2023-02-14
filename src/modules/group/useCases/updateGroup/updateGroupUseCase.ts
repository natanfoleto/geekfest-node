import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupRepositories } from '@modules/group/repositories/GroupRepositories';

interface IRequest {
	id: number;
	name: string;
}

class UpdateGroupUseCase {
	private groupRepositories: GroupRepositories;

	constructor(groupRepositories = new GroupRepositories()) {
		this.groupRepositories = groupRepositories;
	}

	async execute({ id, name }: IRequest): Promise<any> {
		try {
			if (!name)
				return new AppError({
					message: 'O nome do grupo não pode estar vazio',
				});

			const groupFound = await this.groupRepositories.countById(id);

			if (!groupFound)
				return new AppError({
					message: `Nenhum grupo encontrado com esse id(${id})`,
				});

			await this.groupRepositories.updateGroup({
				id,
				name,
			});

			return new AppResponse({ message: 'Grupo atualizado com sucesso' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateGroupUseCase };

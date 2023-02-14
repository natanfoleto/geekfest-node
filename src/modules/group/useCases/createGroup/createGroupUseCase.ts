import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupRepositories } from '@modules/group/repositories/GroupRepositories';

interface IRequest {
	name: string;
}

class CreateGroupUseCase {
	private groupRepositories: GroupRepositories;

	constructor(groupRepositories = new GroupRepositories()) {
		this.groupRepositories = groupRepositories;
	}

	async execute({ name }: IRequest): Promise<any> {
		try {
			if (!name)
				return new AppError({
					message: 'O grupo precisa ter um nome',
				});

			const groupFound = await this.groupRepositories.countByName(name);

			if (groupFound)
				return new AppError({
					message: 'Já existe um grupo com este nome',
				});

			const group = await this.groupRepositories.create({
				name,
			});

			return new AppResponse({
				message: 'Grupo criado com sucesso',
				data: group,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateGroupUseCase };

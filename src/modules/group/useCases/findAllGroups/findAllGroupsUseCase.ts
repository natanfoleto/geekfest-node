import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupRepositories } from '@modules/group/repositories/GroupRepositories';

class FindAllGroupsUseCase {
	private groupRepositories: GroupRepositories;

	constructor(groupRepositories = new GroupRepositories()) {
		this.groupRepositories = groupRepositories;
	}

	async execute(): Promise<any> {
		try {
			const groups = await this.groupRepositories.findAll();

			return new AppResponse({ data: groups });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindAllGroupsUseCase };

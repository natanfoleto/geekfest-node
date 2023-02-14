import { Request, Response } from 'express';
import { FindAllGroupsUseCase } from '@modules/group/useCases/findAllGroups/findAllGroupsUseCase';

class FindAllGroupsController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findAllGroupsUseCase = new FindAllGroupsUseCase();

			const response = await findAllGroupsUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllGroupsController };

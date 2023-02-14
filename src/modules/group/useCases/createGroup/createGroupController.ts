import { Request, Response } from 'express';

import { CreateGroupUseCase } from '@modules/group/useCases/createGroup/createGroupUseCase';

class CreateGroupController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createGroupUseCase = new CreateGroupUseCase();

			const { name } = req.body;

			const response = await createGroupUseCase.execute({
				name,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { CreateGroupController };

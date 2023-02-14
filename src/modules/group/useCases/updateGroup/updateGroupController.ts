import { Request, Response } from 'express';

import { UpdateGroupUseCase } from '@modules/group/useCases/updateGroup/updateGroupUseCase';

class UpdateGroupController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const updateGroupUseCase = new UpdateGroupUseCase();

			const { id } = req.params;
			const { name } = req.body;

			const response = await updateGroupUseCase.execute({
				id: Number(id),
				name,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateGroupController };

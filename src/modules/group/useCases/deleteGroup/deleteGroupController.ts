import { Request, Response } from 'express';
import { DeleteGroupUseCase } from '@modules/group/useCases/deleteGroup/deleteGroupUseCase';

class DeleteGroupController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const deleteGroupUseCase = new DeleteGroupUseCase();

			const { id } = req.params;

			const response = await deleteGroupUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteGroupController };

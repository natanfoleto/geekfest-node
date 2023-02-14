import { DeleteByGroupUseCase } from '@modules/groupPermission/useCases/deleteByGroup/deleteByGroupUseCase';
import { Request, Response } from 'express';

class DeleteByGroupController {
	async handle(req: Request, res: Response) {
		try {
			const deleteByGroupUseCase = new DeleteByGroupUseCase();

			const { id } = req.params;

			const response = await deleteByGroupUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteByGroupController };

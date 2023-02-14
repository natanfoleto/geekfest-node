import { Request, Response } from 'express';
import { DeleteByPermissionUseCase } from '@modules/groupPermission/useCases/deleteByPermission/deleteByPermissionUseCase';

class DeleteByPermissionController {
	async handle(req: Request, res: Response) {
		try {
			const deleteByPermissionUseCase = new DeleteByPermissionUseCase();

			const { id } = req.params;

			const response = await deleteByPermissionUseCase.execute({
				id: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteByPermissionController };

import { Request, Response } from 'express';
import { DeleteGroupPermissionUseCase } from '@modules/groupPermission/useCases/deleteGroupPermission/deleteGroupPermissionUseCase';

class DeleteGroupPermissionController {
	async handle(req: Request, res: Response) {
		try {
			const deleteGroupPermissionUseCase = new DeleteGroupPermissionUseCase();

			const { id } = req.params;

			const response = await deleteGroupPermissionUseCase.execute({
				id: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteGroupPermissionController };

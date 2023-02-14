import { Request, Response } from 'express';

import { DeletePermissionUseCase } from '@modules/permission/useCases/deletePermission/deletePermissionUseCase';

class DeletePermissionController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const deletePermissionUseCase = new DeletePermissionUseCase();

			const { id } = req.params;

			const response = await deletePermissionUseCase.execute({
				id: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeletePermissionController };

import { Request, Response } from 'express';
import { UpdatePermissionUseCase } from '@modules/permission/useCases/updatePermission/updatePermissionUseCase';

class UpdatePermissionController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const updatePermissionUseCase = new UpdatePermissionUseCase();

			const { id } = req.params;
			const { name, lore, type } = req.body;

			const response = await updatePermissionUseCase.execute({
				id: Number(id),
				name,
				lore,
				type,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdatePermissionController };

import { Request, Response } from 'express';

import { CreatePermissionUseCase } from '@modules/permission/useCases/createPermission/createPermissionUseCase';

class CreatePermissionController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createPermissionUseCase = new CreatePermissionUseCase();

			const { name, lore, type } = req.body;

			const response = await createPermissionUseCase.execute({
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

export { CreatePermissionController };

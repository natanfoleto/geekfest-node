import { Request, Response } from 'express';
import { FindAllPermissionsUseCase } from '@modules/permission/useCases/findAllPermissions/findAllPermissionsUseCase';

class FindAllPermissionsController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findAllPermissionsUseCase = new FindAllPermissionsUseCase();

			const response = await findAllPermissionsUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllPermissionsController };

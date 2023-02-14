import { Request, Response } from 'express';
import { FindPermissionByIdUseCase } from '@modules/permission/useCases/findPermissionById/findPermissionByIdUseCase';

class FindPermissionByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findPermissionByIdUseCase = new FindPermissionByIdUseCase();

			const { id } = req.params;

			const response = await findPermissionByIdUseCase.execute({
				id: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindPermissionByIdController };

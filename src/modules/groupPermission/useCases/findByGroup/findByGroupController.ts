import { Request, Response } from 'express';
import { FindByGroupUseCase } from '@modules/groupPermission/useCases/findByGroup/findByGroupUseCase';

class FindByGroupController {
	async handle(req: Request, res: Response) {
		try {
			const findByGroupUseCase = new FindByGroupUseCase();

			const { id } = req.params;

			const response = await findByGroupUseCase.execute({
				id_group: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindByGroupController };

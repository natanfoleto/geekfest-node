import { FindByUserIdUseCase } from '@modules/userTeam/useCases/findByUserId/findByUserIdUseCase';
import { Request, Response } from 'express';

class FindByUserIdController {
	async handle(req: Request, res: Response) {
		try {
			const findByUserIdUseCase = new FindByUserIdUseCase();

			const { id } = req.params;

			const response = await findByUserIdUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindByUserIdController };

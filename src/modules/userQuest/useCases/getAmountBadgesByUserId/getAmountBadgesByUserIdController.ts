import { GetAmountBadgesByUserIdUseCase } from '@modules/userQuest/useCases/getAmountBadgesByUserId/getAmountBadgesByUserIdUseCase';
import { Request, Response } from 'express';

class GetAmountBadgesByUserIdController {
	async handle(req: Request, res: Response) {
		try {
			const getAmountBadgesByUserIdUseCase =
				new GetAmountBadgesByUserIdUseCase();

			const { id } = req.params;

			const response = await getAmountBadgesByUserIdUseCase.execute({
				id: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { GetAmountBadgesByUserIdController };

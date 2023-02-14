import { Request, Response } from 'express';
import { FindGameByIdUseCase } from '@modules/game/useCases/findGameById/findGameByIdUseCase';

class FindGameByIdController {
	async handle(req: Request, res: Response) {
		try {
			const findGameByIdUseCase = new FindGameByIdUseCase();

			const { id } = req.params;

			const response = await findGameByIdUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindGameByIdController };

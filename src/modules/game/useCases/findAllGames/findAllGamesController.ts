import { Request, Response } from 'express';

import { FindAllGamesUseCase } from '@modules/game/useCases/findAllGames/findAllGamesUseCase';

class FindAllGamesController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findAllGamesUseCase = new FindAllGamesUseCase();

			const response = await findAllGamesUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllGamesController };

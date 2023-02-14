import { Request, Response } from 'express';

import { CreateGameUseCase } from '@modules/game/useCases/createGame/createGameUseCase';

class CreateGameController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createGameUseCase = new CreateGameUseCase();

			const { name, device, modality, schedules, bannerUrl } = req.body;

			const response = await createGameUseCase.execute({
				name,
				device,
				modality,
				schedules,
				bannerUrl,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { CreateGameController };

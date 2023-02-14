import { Request, Response } from 'express';
import { UpdateGameUseCase } from '@modules/game/useCases/updateGame/updateGameUseCase';

class UpdateGameController {
	async handle(req: Request, res: Response) {
		try {
			const updateGameUseCase = new UpdateGameUseCase();

			const { id } = req.params;
			const { name, device, modality, schedules, bannerUrl } = req.body;

			const response = await updateGameUseCase.execute({
				id: Number(id),
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

export { UpdateGameController };

import { Request, Response } from 'express';

import { DeleteGameUseCase } from '@modules/game/useCases/deleteGame/deleteGameUseCase';

class DeleteGameController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const deleteGameUseCase = new DeleteGameUseCase();

			const { id } = req.params;

			const response = await deleteGameUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteGameController };

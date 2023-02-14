import { Request, Response } from 'express';

import { UpdateQuestUseCase } from '@modules/quest/useCase/updateQuest/updateQuestUseCase';

class UpdateQuestController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const updateQuestUseCase = new UpdateQuestUseCase();

			const { id } = req.params;

			const { name, objective, amount } = req.body;

			const response = await updateQuestUseCase.execute({
				id: Number(id),
				name,
				objective,
				amount,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateQuestController };

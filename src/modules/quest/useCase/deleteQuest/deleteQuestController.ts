import { Request, Response } from 'express';

import { DeleteQuestUseCase } from '@modules/quest/useCase/deleteQuest/deleteQuestUseCase';

class DeleteQuestController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const deleteQuestUseCase = new DeleteQuestUseCase();

			const { id } = req.params;

			const response = await deleteQuestUseCase.execute({
				id: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteQuestController };

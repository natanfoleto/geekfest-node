import { Request, Response } from 'express';

import { CreateQuestUseCase } from '@modules/quest/useCase/createQuest/createQuestUseCase';

class CreateQuestController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createQuestUseCase = new CreateQuestUseCase();

			const { name, objective, amount } = req.body;

			const response = await createQuestUseCase.execute({
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

export { CreateQuestController };

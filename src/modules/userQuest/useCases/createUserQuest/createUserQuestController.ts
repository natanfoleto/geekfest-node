import { CreateUserQuestUseCase } from '@modules/userQuest/useCases/createUserQuest/createUserQuestUseCase';
import { Request, Response } from 'express';

class CreateUserQuestController {
	async handle(req: Request, res: Response) {
		try {
			const createUserQuestUseCase = new CreateUserQuestUseCase();

			const { id_quest, id_user } = req.body;

			const response = await createUserQuestUseCase.execute({
				id_quest,
				id_user,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { CreateUserQuestController };

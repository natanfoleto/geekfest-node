import { DeleteUserQuestUseCase } from '@modules/userQuest/useCases/deleteUserQuest/deleteUserQuestUseCase';
import { Request, Response } from 'express';

class DeleteUserQuestController {
	async handle(req: Request, res: Response) {
		try {
			const deleteUserQuestUseCase = new DeleteUserQuestUseCase();

			const { id } = req.params;

			const response = await deleteUserQuestUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteUserQuestController };

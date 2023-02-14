import { FindByQuestIdUseCase } from '@modules/userQuest/useCases/findByQuestId/findByQuestIdUseCase';
import { Request, Response } from 'express';

class FindByQuestIdController {
	async handle(req: Request, res: Response) {
		try {
			const findByQuestIdUseCase = new FindByQuestIdUseCase();

			const { id } = req.params;

			const response = await findByQuestIdUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindByQuestIdController };

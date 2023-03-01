import { FindUsersTeamsUseCase } from '@modules/event/useCases/findUserEvent/findUserEventUseCase';
import { Request, Response } from 'express';

class FindUsersTeamsController {
	async handle(req: Request, res: Response) {
		try {
			const findUsersTeamsUseCase = new FindUsersTeamsUseCase();

			const response = await findUsersTeamsUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindUsersTeamsController };

import { Request, Response } from 'express';

import { FindAllTeamsUseCase } from '@modules/team/useCase/findAllTeams/findAllTeamsUseCase';

class FindAllTeamsController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findAllTeamsUseCase = new FindAllTeamsUseCase();

			const response = await findAllTeamsUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllTeamsController };

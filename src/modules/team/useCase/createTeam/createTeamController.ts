import { Request, Response } from 'express';

import { CreateTeamUseCase } from '@modules/team/useCase/createTeam/createTeamUseCase';

class CreateTeamController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createTeamUseCase = new CreateTeamUseCase();

			const { name, id_event, id_user } = req.body;

			const response = await createTeamUseCase.execute({
				name,
				id_event,
				id_user,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { CreateTeamController };

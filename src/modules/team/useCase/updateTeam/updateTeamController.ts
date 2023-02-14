import { Request, Response } from 'express';

import { UpdateTeamUseCase } from '@modules/team/useCase/updateTeam/updateTeamUseCase';

class UpdateTeamController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const updateTeamUseCase = new UpdateTeamUseCase();

			const { id } = req.params;

			const { name, id_event } = req.body;

			const response = await updateTeamUseCase.execute({
				id: Number(id),
				name,
				id_event,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateTeamController };

import { Request, Response } from 'express';

import { DeleteTeamUseCase } from '@modules/team/useCase/deleteTeam/deleteTeamUseCase';

class DeleteTeamController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const deleteTeamUseCase = new DeleteTeamUseCase();

			const { id } = req.params;

			const response = await deleteTeamUseCase.execute({
				id: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteTeamController };

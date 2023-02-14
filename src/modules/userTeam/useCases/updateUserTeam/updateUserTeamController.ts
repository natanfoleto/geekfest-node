import { UpdateUserTeamUseCase } from '@modules/userTeam/useCases/updateUserTeam/updateUserTeamUseCase';
import { Request, Response } from 'express';

class UpdateUserTeamController {
	async handle(req: Request, res: Response) {
		try {
			const updateUserTeamUseCase = new UpdateUserTeamUseCase();

			const { id } = req.params;
			const { users } = req.body;

			const response = await updateUserTeamUseCase.execute({
				id_team: Number(id),
				users,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateUserTeamController };

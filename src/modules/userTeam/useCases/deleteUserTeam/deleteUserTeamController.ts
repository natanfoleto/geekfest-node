import { DeleteUserTeamUseCase } from '@modules/userTeam/useCases/deleteUserTeam/deleteUserTeamUseCase';
import { Request, Response } from 'express';

class DeleteUserTeamController {
	async handle(req: Request, res: Response) {
		try {
			const deleteUserTeamUseCase = new DeleteUserTeamUseCase();

			const { id } = req.params;

			const response = await deleteUserTeamUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteUserTeamController };

import { DeleteByTeamUseCase } from '@modules/userTeam/useCases/deleteByTeam/deleteByTeamUseCase';
import { Request, Response } from 'express';

class DeleteByTeamController {
	async handle(req: Request, res: Response) {
		try {
			const deleteByTeamUseCase = new DeleteByTeamUseCase();

			const { id } = req.params;

			const response = await deleteByTeamUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteByTeamController };

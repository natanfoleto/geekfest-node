import { Request, Response } from 'express';

import { FindTeamsByUserIdUseCase } from '@modules/team/useCase/findTeamsByUserId/findTeamsByUserIdUseCase';

class FindTeamsByUserIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const { id } = req.params;

			const findTeamsByUserIdUseCase = new FindTeamsByUserIdUseCase();

			const response = await findTeamsByUserIdUseCase.execute({
				id: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindTeamsByUserIdController };

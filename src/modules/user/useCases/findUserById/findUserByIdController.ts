import { Request, Response } from 'express';

import { FindUserByIdUseCase } from '@modules/user/useCases/findUserById/findUserByIdUseCase';

class FindUserByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findUserByIdUseCase = new FindUserByIdUseCase();

			const { id } = req.params;

			const response = await findUserByIdUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindUserByIdController };

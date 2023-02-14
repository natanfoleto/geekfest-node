import { Request, Response } from 'express';

import { FindAllUsersUseCase } from '@modules/user/useCases/findAllUsers/findAllUsersUseCase';

class FindAllUsersController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findAllUsersUseCase = new FindAllUsersUseCase();

			const response = await findAllUsersUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllUsersController };

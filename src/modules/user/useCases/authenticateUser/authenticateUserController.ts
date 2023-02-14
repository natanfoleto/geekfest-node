import { Request, Response } from 'express';

import { AuthenticateUserUseCase } from '@modules/user/useCases/authenticateUser/authenticateUserUseCase';

class AuthenticateUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const authenticateUserUseCase = new AuthenticateUserUseCase();

			const { username, password } = req.body;

			const response = await authenticateUserUseCase.execute({
				username,
				password,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { AuthenticateUserController };

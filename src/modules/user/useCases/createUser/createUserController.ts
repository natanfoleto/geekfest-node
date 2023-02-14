import { Request, Response } from 'express';

import { CreateUserUseCase } from '@modules/user/useCases/createUser/createUserUseCase';

class CreateUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createUserUseCase = new CreateUserUseCase();

			const { username, name, birthDate, password, confirmPassword } = req.body;

			const response = await createUserUseCase.execute({
				username,
				name,
				birthDate,
				password,
				confirmPassword,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { CreateUserController };

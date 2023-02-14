import { FindByUsernameUseCase } from '@modules/userEvent/useCases/findByUsername/findByUsernameUseCase';
import { Request, Response } from 'express';

class FindByUsernameController {
	async handle(req: Request, res: Response) {
		try {
			const findByUserNameUseCase = new FindByUsernameUseCase();

			const { username } = req.body;

			const response = await findByUserNameUseCase.execute({ username });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindByUsernameController };

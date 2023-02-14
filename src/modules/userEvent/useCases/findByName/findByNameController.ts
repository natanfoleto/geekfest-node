import { FindByNameUseCase } from '@modules/userEvent/useCases/findByName/findByNameUseCase';
import { Request, Response } from 'express';

class FindByNameController {
	async handle(req: Request, res: Response) {
		try {
			const findByNameUseCase = new FindByNameUseCase();

			const { name } = req.body;

			const response = await findByNameUseCase.execute({ name });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindByNameController };

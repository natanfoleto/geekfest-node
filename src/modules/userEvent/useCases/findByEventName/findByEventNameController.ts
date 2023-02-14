import { FindByEventNameUseCase } from '@modules/userEvent/useCases/findByEventName/findByEventNameUseCase';
import { Request, Response } from 'express';

class FindByEventNameController {
	async handle(req: Request, res: Response) {
		try {
			const findByEventNameUseCase = new FindByEventNameUseCase();

			const { name } = req.body;

			const response = await findByEventNameUseCase.execute({ name });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindByEventNameController };

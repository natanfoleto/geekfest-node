import { FindEventByIdUseCase } from '@modules/event/useCases/findEventById/findEventByIdUseCase';
import { Request, Response } from 'express';

class FindEventByIdController {
	async handle(req: Request, res: Response) {
		try {
			const findEventByIdUseCase = new FindEventByIdUseCase();

			const { id } = req.params;

			const response = await findEventByIdUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindEventByIdController };

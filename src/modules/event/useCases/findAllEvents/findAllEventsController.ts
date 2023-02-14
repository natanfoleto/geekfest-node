import { FindAllEventsUseCase } from '@modules/event/useCases/findAllEvents/findAllEventsUseCase';
import { Request, Response } from 'express';

class FindAllEventsController {
	async handle(req: Request, res: Response) {
		try {
			const findAllEventsUseCase = new FindAllEventsUseCase();

			const response = await findAllEventsUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllEventsController };

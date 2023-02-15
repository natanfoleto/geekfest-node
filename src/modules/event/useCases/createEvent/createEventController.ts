import { Request, Response } from 'express';

import { CreateEventUseCase } from '@modules/event/useCases/createEvent/createEventUseCase';

class CreateEventController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createEventUseCase = new CreateEventUseCase();

			const { name, notes, bannerUrl, rulesUrl, type, min, max } = req.body;

			const response = await createEventUseCase.execute({
				name,
				notes,
				bannerUrl,
				rulesUrl,
				type,
				min,
				max,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { CreateEventController };

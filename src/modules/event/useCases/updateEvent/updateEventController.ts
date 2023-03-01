import { Request, Response } from 'express';
import { UpdateEventUseCase } from '@modules/event/useCases/updateEvent/updateEventUseCase';

class UpdateEventController {
	async handle(req: Request, res: Response) {
		try {
			const updateEventUseCase = new UpdateEventUseCase();

			const { id } = req.params;
			const { name, notes, bannerUrl, rulesUrl, type, min, max, limit } =
				req.body;

			const response = await updateEventUseCase.execute({
				id: Number(id),
				name,
				notes,
				bannerUrl,
				rulesUrl,
				type,
				min,
				max,
				limit,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateEventController };

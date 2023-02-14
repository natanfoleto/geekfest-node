import { Request, Response } from 'express';

import { DeleteEventUseCase } from '@modules/event/useCases/deleteEvent/deleteEventUseCase';

class DeleteEventController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const deleteUserUseCase = new DeleteEventUseCase();

			const { id } = req.params;

			const response = await deleteUserUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteEventController };

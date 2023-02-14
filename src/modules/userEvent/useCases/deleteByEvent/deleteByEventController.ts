import { DeleteByEventUseCase } from '@modules/userEvent/useCases/deleteByEvent/deleteByEventUseCase';
import { Request, Response } from 'express';

class DeleteByEventController {
	async handle(req: Request, res: Response) {
		try {
			const deleteByEventUseCase = new DeleteByEventUseCase();

			const { id } = req.params;

			const response = await deleteByEventUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteByEventController };

import { DeleteUserEventUseCase } from '@modules/userEvent/useCases/deleteUserEvent/deleteUserEventUseCase';
import { Request, Response } from 'express';

class DeleteUserEventController {
	async handle(req: Request, res: Response) {
		try {
			const deleteUserEventUseCase = new DeleteUserEventUseCase();

			const { id } = req.params;

			const response = await deleteUserEventUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteUserEventController };

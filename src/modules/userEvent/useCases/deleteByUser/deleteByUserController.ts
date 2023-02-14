import { DeleteByUserUseCase } from '@modules/userEvent/useCases/deleteByUser/deleteByUserUseCase';
import { Request, Response } from 'express';

class DeleteByUserController {
	async handle(req: Request, res: Response) {
		try {
			const deleteByUserUseCase = new DeleteByUserUseCase();

			const { id } = req.params;

			const response = await deleteByUserUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteByUserController };

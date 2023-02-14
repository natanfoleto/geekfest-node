import { Request, Response } from 'express';

import { DeleteUserUseCase } from '@modules/user/useCases/deleteUser/deleteUserUseCase';

class DeleteUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const deleteUserUseCase = new DeleteUserUseCase();

			const { id } = req.params;

			const response = await deleteUserUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteUserController };

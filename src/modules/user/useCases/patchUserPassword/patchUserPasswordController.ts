import { Request, Response } from 'express';

import { PatchUserPasswordUseCase } from '@modules/user/useCases/patchUserPassword/patchUserPasswrodUseCase';

class PatchUserPasswordController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const patchUserPasswordUseCase = new PatchUserPasswordUseCase();

			const { id } = req.params;
			const { password, confirmPassword } = req.body;

			const response = await patchUserPasswordUseCase.execute({
				id: Number(id),
				password,
				confirmPassword,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { PatchUserPasswordController };

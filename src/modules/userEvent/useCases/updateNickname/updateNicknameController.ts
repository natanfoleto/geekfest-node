import { Request, Response } from 'express';
import { UpdateNicknameUseCase } from '@modules/userEvent/useCases/updateNickname/updateNicknameUseCase';

class UpdateNicknameController {
	async handle(req: Request, res: Response) {
		try {
			const updateNicknameUseCase = new UpdateNicknameUseCase();

			const { id } = req.params;

			const { nickname } = req.body;

			const response = await updateNicknameUseCase.execute({
				id: Number(id),
				nickname,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateNicknameController };

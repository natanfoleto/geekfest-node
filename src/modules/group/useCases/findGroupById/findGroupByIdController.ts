import { Request, Response } from 'express';
import { FindGroupByIdUseCase } from '@modules/group/useCases/findGroupById/findGroupByIdUseCase';

class FindGroupByIdController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findGroupByIdUseCase = new FindGroupByIdUseCase();

			const { id } = req.params;

			const response = await findGroupByIdUseCase.execute({ id: Number(id) });

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindGroupByIdController };

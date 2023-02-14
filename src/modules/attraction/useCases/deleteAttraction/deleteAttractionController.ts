import { Request, Response } from 'express';
import { DeleteAttractionUseCase } from './deleteAttractionUseCase';

class DeleteAttractionController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const deleteAttractionUseCase = new DeleteAttractionUseCase();

			const { id } = req.params;

			const response = await deleteAttractionUseCase.execute({
				id: Number(id),
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { DeleteAttractionController };

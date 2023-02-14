import { Request, Response } from 'express';
import { CreateAttractionUseCase } from './createAttractionUseCase';

class CreateAttractionController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createAttractionUseCase = new CreateAttractionUseCase();

			const { name, description, bannerUrl } = req.body;

			const response = await createAttractionUseCase.execute({
				name,
				description,
				bannerUrl,
			});

			return res.status(201).json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { CreateAttractionController };

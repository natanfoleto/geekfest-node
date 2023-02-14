import { Request, Response } from 'express';
import { FindAllAttractionsUseCase } from './findAllAttractionsUseCase';

class FindAllAttractionsController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findAllAttractionsUseCase = new FindAllAttractionsUseCase();

			const response = await findAllAttractionsUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllAttractionsController };

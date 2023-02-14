import env from '@config/config';
import { NextFunction, Request, Response } from 'express';
import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { verify } from 'jsonwebtoken';
import { AppError } from '@shared/answers/AppError';

interface IPayload {
	tokenPayload: {
		sub: string;
	};
}

export async function authentication(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<any> {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json(
			new AppError({
				message: 'Token missing',
			})
		);
	}

	const [, token] = authHeader.split(' ');

	try {
		const { tokenPayload } = verify(token, env.JWT_SECRET_TOKEN) as IPayload;

		const userRepositories = new UserRepositories();

		const user = await userRepositories.findById(Number(tokenPayload.sub));

		if (!user)
			return res.status(401).json(
				new AppError({
					message: 'Usuário não encontrado!',
				})
			);

		return next();
	} catch (error) {
		return res.status(401).json(
			new AppError({
				message: 'Token inválido',
			})
		);
	}
}

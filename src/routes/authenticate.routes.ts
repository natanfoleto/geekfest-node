import { Router } from 'express';

import { AuthenticateUserController } from '@modules/user/useCases/authenticateUser/authenticateUserController';

const authenticateRoutes = Router();

authenticateRoutes.post('/', new AuthenticateUserController().handle);

export { authenticateRoutes };

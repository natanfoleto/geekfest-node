import { Router } from 'express';

import { FindByUserIdController } from '@modules/userQuest/useCases/findByUserId/findByUserIdController';
import { FindByQuestIdController } from '@modules/userQuest/useCases/findByQuestId/findByQuestIdController';
import { GetAmountBadgesByUserIdController } from '@modules/userQuest/useCases/getAmountBadgesByUserId/getAmountBadgesByUserIdController';

import { CreateUserQuestController } from '@modules/userQuest/useCases/createUserQuest/createUserQuestController';

import { DeleteUserQuestController } from '@modules/userQuest/useCases/deleteUserQuest/deleteUserQuestController';
import { DeleteByUserController } from '@modules/userQuest/useCases/deleteByUser/deleteByUserController';

import { authentication } from '@middlewares/authentication';

const userQuestRoutes = Router();

userQuestRoutes.use(authentication);

userQuestRoutes.get('/user/:id', new FindByUserIdController().handle);
userQuestRoutes.get('/quest/:id', new FindByQuestIdController().handle);
userQuestRoutes.get(
	'/amount/:id',
	new GetAmountBadgesByUserIdController().handle
);

userQuestRoutes.post('/', new CreateUserQuestController().handle);
userQuestRoutes.delete('/:id', new DeleteUserQuestController().handle);
userQuestRoutes.delete('/user/:id', new DeleteByUserController().handle);

export { userQuestRoutes };

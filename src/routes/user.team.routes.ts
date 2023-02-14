import { Router } from 'express';

import { UpdateNicknameController } from '@modules/userTeam/useCases/updateNickname/updateNicknameController';

import { FindByUserIdController } from '@modules/userTeam/useCases/findByUserId/findByUserIdController';
import { FindByNameController } from '@modules/userTeam/useCases/findByName/findByNameController';
import { FindByUsernameController } from '@modules/userTeam/useCases/findByUsername/findByUsernameController';

import { UpdateUserTeamController } from '@modules/userTeam/useCases/updateUserTeam/updateUserTeamController';

import { DeleteUserTeamController } from '@modules/userTeam/useCases/deleteUserTeam/deleteUserTeamController';
import { DeleteByUserController } from '@modules/userTeam/useCases/deleteByUser/deleteByUserController';
import { DeleteByTeamController } from '@modules/userTeam/useCases/deleteByTeam/deleteByTeamController';

import { authentication } from '@middlewares/authentication';

const userTeamRoutes = Router();

userTeamRoutes.use(authentication);

userTeamRoutes.patch('/nickname/:id', new UpdateNicknameController().handle);

userTeamRoutes.get('/user/:id', new FindByUserIdController().handle);
userTeamRoutes.post('/user/name', new FindByNameController().handle);
userTeamRoutes.post('/user/username', new FindByUsernameController().handle);

userTeamRoutes.put('/:id', new UpdateUserTeamController().handle);
userTeamRoutes.delete('/:id', new DeleteUserTeamController().handle);
userTeamRoutes.delete('/user/:id', new DeleteByUserController().handle);
userTeamRoutes.delete('/team/:id', new DeleteByTeamController().handle);

export { userTeamRoutes };

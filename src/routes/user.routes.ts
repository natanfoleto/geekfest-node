import { Router } from 'express';

import { FindAllUsersController } from '@modules/user/useCases/findAllUsers/findAllUsersController';
import { FindUserByIdController } from '@modules/user/useCases/findUserById/findUserByIdController';
import { CreateUserController } from '@modules/user/useCases/createUser/createUserController';
import { UpdateUserController } from '@modules/user/useCases/updateUser/updateUserController';
import { PatchUserPasswordController } from '@modules/user/useCases/patchUserPassword/patchUserPasswordController';
import { DeleteUserController } from '@modules/user/useCases/deleteUser/deleteUserController';

import { authentication } from '@middlewares/authentication';

const userRoutes = Router();

userRoutes.post('/', new CreateUserController().handle);

userRoutes.use(authentication);

userRoutes.get('/', new FindAllUsersController().handle);
userRoutes.get('/:id', new FindUserByIdController().handle);
userRoutes.put('/:id', new UpdateUserController().handle);
userRoutes.patch('/:id', new PatchUserPasswordController().handle);
userRoutes.delete('/:id', new DeleteUserController().handle);

export { userRoutes };

import { Router } from 'express';

import { CreateGroupController } from '@modules/group/useCases/createGroup/createGroupController';
import { FindAllGroupsController } from '@modules/group/useCases/findAllGroups/findAllGroupsController';
import { FindGroupByIdController } from '@modules/group/useCases/findGroupById/findGroupByIdController';
import { UpdateGroupController } from '@modules/group/useCases/updateGroup/updateGroupController';
import { DeleteGroupController } from '@modules/group/useCases/deleteGroup/deleteGroupController';

import { authentication } from '@middlewares/authentication';

const groupRoutes = Router();

groupRoutes.use(authentication);

groupRoutes.post('/', new CreateGroupController().handle);
groupRoutes.get('/', new FindAllGroupsController().handle);
groupRoutes.get('/:id', new FindGroupByIdController().handle);
groupRoutes.put('/:id', new UpdateGroupController().handle);
groupRoutes.delete('/:id', new DeleteGroupController().handle);

export { groupRoutes };

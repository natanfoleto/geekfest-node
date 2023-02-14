import { Router } from 'express';

import { FindByGroupController } from '@modules/groupPermission/useCases/findByGroup/findByGroupController';
import { UpdateGroupPermissionController } from '@modules/groupPermission/useCases/updateGroupPermission/updateGroupPermissionController';
import { DeleteGroupPermissionController } from '@modules/groupPermission/useCases/deleteGroupPermission/deleteGroupPermissionController';
import { DeleteByGroupController } from '@modules/groupPermission/useCases/deleteByGroup/deleteByGroupController';
import { DeleteByPermissionController } from '@modules/groupPermission/useCases/deleteByPermission/deleteByPermissionController';

import { authentication } from '@middlewares/authentication';

const groupPermissionRoutes = Router();

groupPermissionRoutes.use(authentication);

groupPermissionRoutes.get('/group/:id', new FindByGroupController().handle);
groupPermissionRoutes.put('/:id', new UpdateGroupPermissionController().handle);
groupPermissionRoutes.delete(
	'/:id',
	new DeleteGroupPermissionController().handle
);
groupPermissionRoutes.delete(
	'/group/:id',
	new DeleteByGroupController().handle
);
groupPermissionRoutes.delete(
	'/permission/:id',
	new DeleteByPermissionController().handle
);

export { groupPermissionRoutes };

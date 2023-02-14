import { Router } from 'express';

import { CreatePermissionController } from '@modules/permission/useCases/createPermission/createPermissionController';
import { FindAllPermissionsController } from '@modules/permission/useCases/findAllPermissions/findAllPermissionsController';
import { FindPermissionByIdController } from '@modules/permission/useCases/findPermissionById/findPermissionByIdController';
import { UpdatePermissionController } from '@modules/permission/useCases/updatePermission/updatePermissionController';
import { DeletePermissionController } from '@modules/permission/useCases/deletePermission/deletePermissionController';

import { authentication } from '@middlewares/authentication';

const permissionRoutes = Router();

permissionRoutes.use(authentication);

permissionRoutes.post('/', new CreatePermissionController().handle);
permissionRoutes.get('/', new FindAllPermissionsController().handle);
permissionRoutes.get('/:id', new FindPermissionByIdController().handle);
permissionRoutes.put('/:id', new UpdatePermissionController().handle);
permissionRoutes.delete('/:id', new DeletePermissionController().handle);

export { permissionRoutes };

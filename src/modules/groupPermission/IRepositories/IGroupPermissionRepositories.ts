import {
	Associate,
	CreateGroupPermission,
} from '@modules/groupPermission/dtos/groupPermission';

import { Permission } from '@modules/permission/dtos/permission';

interface IGroupPermissionRepositories {
	findByGroup(id_group: number): Promise<Permission[]>;
	count(data: Associate): Promise<number>;
	countByPermission(id_permission: number): Promise<number>;
	create(data: CreateGroupPermission): Promise<void>;
	delete(id: number): Promise<void>;
	deleteByGroup(id: number): Promise<void>;
	deleteByPermission(id: number): Promise<void>;
}

export { IGroupPermissionRepositories };

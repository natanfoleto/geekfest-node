import {
	Permission,
	CreatePermission,
	UpdatePermission,
} from '@modules/permission/dtos/permission';

interface IPermissionRepositories {
	create(data: CreatePermission): Promise<Permission>;
	findAll(): Promise<Permission[]>;
	findById(id: number): Promise<Permission>;
	delete(id: number): Promise<void>;
	countById(id: number): Promise<number>;
	countByName(name: string): Promise<number>;
	updatePermission(data: UpdatePermission): Promise<void>;
}

export { IPermissionRepositories };

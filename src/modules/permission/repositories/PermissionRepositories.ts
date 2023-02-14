import prisma from '@libs/prismaClient';

import {
	Permission,
	CreatePermission,
	UpdatePermission,
} from '@modules/permission/dtos/permission';

import { IPermissionRepositories } from '@modules/permission/IRepositories/IPermissionRepositories';

class PermissionRepositories implements IPermissionRepositories {
	async create(data: CreatePermission): Promise<Permission> {
		return prisma.permissions.create({
			data,
		});
	}

	async countById(id: number): Promise<number> {
		return prisma.permissions.count({
			where: { id },
		});
	}

	async countByName(name: string): Promise<number> {
		return prisma.permissions.count({
			where: { name },
		});
	}

	async findAll(): Promise<Permission[]> {
		return prisma.permissions.findMany();
	}

	async findById(id: number): Promise<Permission> {
		return prisma.permissions.findFirst({
			where: { id },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.permissions.delete({
			where: { id },
		});
	}

	async updatePermission({
		id,
		name,
		lore,
		type,
	}: UpdatePermission): Promise<void> {
		await prisma.permissions.update({
			where: { id },
			data: { name, lore, type },
		});
	}
}

export { PermissionRepositories };

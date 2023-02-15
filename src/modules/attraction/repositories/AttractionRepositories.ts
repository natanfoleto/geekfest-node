import prisma from '@libs/prismaClient';

import {
	CreateAttraction,
	Attraction,
	UpdateAttraction,
} from '@modules/attraction/dto/attraction';

import { IAttractionRepositories } from '../IRepositories/IAttractionRepositories';

export class AttractionRepositories implements IAttractionRepositories {
	async findAll(): Promise<Attraction[]> {
		return prisma.attractions.findMany();
	}

	async countByName(name: string): Promise<number> {
		return prisma.attractions.count({
			where: {
				name,
			},
		});
	}

	async create(data: CreateAttraction): Promise<Attraction> {
		return prisma.attractions.create({
			data,
		});
	}

	async update({
		id,
		name,
		description,
		banner_url,
	}: UpdateAttraction): Promise<void> {
		await prisma.attractions.update({
			where: { id },
			data: {
				name,
				description,
				banner_url,
			},
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.attractions.delete({
			where: { id },
		});
	}
}

import prisma from '@libs/prismaClient';

import { Event, CreateEvent, UpdateEvent } from '@modules/event/dtos/event';

import { IEventRepositories } from '@modules/event/IRepositories/IEventRepositories';

class EventRepositories implements IEventRepositories {
	async create(data: CreateEvent): Promise<Event> {
		return prisma.events.create({
			data,
			select: {
				id: true,
				name: true,
				notes: true,
				banner_url: true,
				rules_url: true,
				type: true,
				min: true,
				max: true,
				limit: true,
			},
		});
	}

	async findAll(): Promise<Event[]> {
		return prisma.events.findMany();
	}

	async findUsersByEvent(): Promise<any> {
		return prisma.events.findMany({
			select: {
				id: true,
				name: true,
				banner_url: true,
				user_event: {
					select: {
						nickname: true,
						user: {
							select: {
								name: true,
								username: true,
							},
						},
					},
				},
			},
		});
	}

	async findTeamsByEvent(): Promise<any> {
		return prisma.events.findMany({
			select: {
				id: true,
				name: true,
				banner_url: true,
				team: {
					select: {
						name: true,
						user_team: {
							select: {
								user: {
									select: {
										name: true,
										username: true,
									},
								},
							},
						},
						user: {
							select: {
								name: true,
								username: true,
							},
						},
					},
				},
			},
		});
	}

	async findById(id: number): Promise<Event> {
		return prisma.events.findFirst({
			where: { id },
		});
	}

	async countById(id: number): Promise<number> {
		return prisma.events.count({
			where: { id },
		});
	}

	async countByName(name: string): Promise<number> {
		return prisma.events.count({
			where: { name },
		});
	}

	async update({
		id,
		name,
		notes,
		banner_url,
		rules_url,
		type,
		min,
		max,
		limit,
	}: UpdateEvent): Promise<Event> {
		return prisma.events.update({
			where: { id },
			data: { name, notes, banner_url, rules_url, type, min, max, limit },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.events.delete({
			where: { id },
		});
	}
}

export { EventRepositories };

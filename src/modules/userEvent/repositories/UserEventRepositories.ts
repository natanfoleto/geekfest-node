import prisma from '@libs/prismaClient';

import { IUserEventRepositories } from '@modules/userEvent/IRepositories/IUserEventRepositories';
import { CreateUserEvent } from '@modules/userEvent/dtos/userEvent';
import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { UserRepositories } from '@modules/user/repositories/UserRepositories';

class UserEventRepositories implements IUserEventRepositories {
	eventRepositories: EventRepositories;
	userRepositories: UserRepositories;

	constructor(
		eventRepositories = new EventRepositories(),
		userRepositories = new UserRepositories()
	) {
		this.eventRepositories = eventRepositories;
		this.userRepositories = userRepositories;
	}

	async findByUserUserId(id: number): Promise<any> {
		return prisma.user_event.findMany({
			where: { user: { id } },
			select: { event: true, id: true, nickname: true },
		});
	}

	async findByUserName(name: string): Promise<any> {
		return prisma.user_event.findMany({
			where: { user: { name: { contains: name } } },
			select: { event: true, nickname: true },
		});
	}

	async findByUserUsername(username: string): Promise<any> {
		return prisma.user_event.findMany({
			where: { user: { username: { contains: username } } },
			select: { event: true, nickname: true },
		});
	}

	async findByEventName(name: string): Promise<any> {
		return prisma.user_event.findMany({
			where: { event: { name: { contains: name } } },
			select: {
				nickname: true,
				user: {
					select: {
						id: true,
						name: true,
						username: true,
						phone: true,
						birth_date: true,
					},
				},
			},
		});
	}

	async count({ id_user, id_event }): Promise<number> {
		return prisma.user_event.count({
			where: { AND: { id_user, id_event } },
		});
	}

	async countByEventName(name: string): Promise<number> {
		return prisma.user_event.count({
			where: { event: { name } },
		});
	}

	async create({
		id_event,
		id_user,
		nickname,
	}: CreateUserEvent): Promise<void> {
		await prisma.user_event.create({
			data: { id_event, id_user, nickname },
		});
	}

	async updateNickname({ id, nickname }): Promise<void> {
		await prisma.user_event.updateMany({
			where: { id },
			data: { nickname },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.user_event.deleteMany({
			where: { id },
		});
	}

	async deleteByUser(id: number): Promise<void> {
		await prisma.user_event.deleteMany({
			where: { user: { id } },
		});
	}

	async deleteByEvent(id: number): Promise<void> {
		await prisma.user_event.deleteMany({
			where: { event: { id } },
		});
	}
}

export { UserEventRepositories };

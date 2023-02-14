import { Event } from '@modules/event/dtos/event';
import { User } from '@modules/user/dtos/user';
import {
	Associate,
	CreateUserEvent,
	UpdateNickName,
} from '@modules/userEvent/dtos/userEvent';

interface IUserEventRepositories {
	findByUserUserId(id: number): Promise<any>;
	findByUserName(name: string): Promise<Event[]>;
	findByUserUsername(username: string): Promise<Event[]>;
	findByEventName(name: string): Promise<User[]>;
	count(data: Associate): Promise<number>;
	create(data: CreateUserEvent): Promise<void>;
	updateNickname(data: UpdateNickName): Promise<void>;
	delete(id: number): Promise<void>;
	deleteByUser(id: number): Promise<void>;
	deleteByEvent(id: number): Promise<void>;
}

export { IUserEventRepositories };

import { Event, CreateEvent, UpdateEvent } from '@modules/event/dtos/event';

interface IEventRepositories {
	findAll(): Promise<Event[]>;
	findById(id: number): Promise<Event>;
	create(data: CreateEvent): Promise<Event>;
	countById(id: number): Promise<number>;
	countByName(name: string): Promise<number>;
	update(data: UpdateEvent): Promise<Event>;
	delete(id: number): Promise<void>;
}

export { IEventRepositories };

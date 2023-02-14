import { Group, CreateGroup, UpdateGroup } from '@modules/group/dtos/group';

interface IGroupRepositories {
	create(data: CreateGroup): Promise<Group>;
	findAll(): Promise<Group[]>;
	findById(id: number): Promise<Group>;
	delete(id: number): Promise<void>;
	countById(id: number): Promise<number>;
	countByName(name: string): Promise<number>;
	updateGroup(data: UpdateGroup): Promise<void>;
}

export { IGroupRepositories };

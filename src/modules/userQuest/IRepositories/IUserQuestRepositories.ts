import { Associate, CreateUserQuest } from '@modules/userQuest/dtos/userQuest';

interface IUserQuestRepositories {
	findByUserId(id: number): Promise<any>;
	findByQuestId(id: number): Promise<any>;
	count(data: Associate): Promise<number>;
	create(data: CreateUserQuest): Promise<void>;
	delete(id: number): Promise<void>;
	deleteByUser(id: number): Promise<void>;
}

export { IUserQuestRepositories };

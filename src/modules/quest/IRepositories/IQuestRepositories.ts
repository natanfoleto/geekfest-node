import { CreateQuest, Quest, UpdateQuest } from '@modules/quest/dto/quest';

export interface IQuestRepositories {
	findAll(): Promise<Quest[]>;
	findById(id: number): Promise<Quest>;
	countByName(name: string): Promise<number>;
	create(data: CreateQuest): Promise<Quest>;
	update(data: UpdateQuest): Promise<void>;
	delete(id: number): Promise<void>;
}

import { Game, CreateGame } from '@modules/game/dtos/game';

interface IGameRepositories {
	create(data: CreateGame): Promise<Game>;
	countById(id: number): Promise<number>;
	findById(id: number): Promise<Game>;
	findAll(): Promise<Game[]>;
	delete(id: number): Promise<void>;
}

export { IGameRepositories };

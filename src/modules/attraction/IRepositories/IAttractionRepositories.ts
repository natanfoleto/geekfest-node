import {
	Attraction,
	CreateAttraction,
	UpdateAttraction,
} from '@modules/attraction/dto/attraction';

interface IAttractionRepositories {
	findAll(): Promise<Attraction[]>;
	countByName(name: string): Promise<number>;
	create(data: CreateAttraction): Promise<Attraction>;
	update(data: UpdateAttraction): Promise<void>;
	delete(id: number): Promise<void>;
}

export { IAttractionRepositories };

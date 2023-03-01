import { CreateTeam, Team, UpdateTeam } from '@modules/team/dto/team';

export interface ITeamRepositories {
	findAll(): Promise<Team[]>;
	findById(id: number): Promise<any>;
	findByUserId(id: number): Promise<any>;
	countByName(name: string): Promise<number>;
	countByEventName(name: string): Promise<number>;
	create(data: CreateTeam): Promise<Team>;
	update(data: UpdateTeam): Promise<void>;
	delete(id: number): Promise<void>;
}

import { Team } from '@modules/team/dto/team';
import { User } from '@modules/user/dtos/user';
import { Associate, CreateUserTeam } from '@modules/userTeam/dtos/userTeam';

interface IUserTeamRepositories {
	findByUserUserId(id: number): Promise<any>;
	findByUserName(name: string): Promise<Team[]>;
	findByUserUsername(username: string): Promise<Team[]>;
	findByTeamName(name: string): Promise<User[]>;
	count(data: Associate): Promise<number>;
	create(data: CreateUserTeam): Promise<void>;
	delete(id: number): Promise<void>;
	deleteByUser(id: number): Promise<void>;
	deleteByTeam(id: number): Promise<void>;
}

export { IUserTeamRepositories };

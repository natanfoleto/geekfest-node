import { Router } from 'express';

import { CreateTeamController } from '@modules/team/useCase/createTeam/createTeamController';
import { FindAllTeamsController } from '@modules/team/useCase/findAllTeams/findAllTeamsController';
import { FindTeamsByUserIdController } from '@modules/team/useCase/findTeamsByUserId/findTeamsByUserIdController';
import { UpdateTeamController } from '@modules/team/useCase/updateTeam/updateTeamController';
import { DeleteTeamController } from '@modules/team/useCase/deleteTeam/deleteTeamController';

const teamRoutes = Router();

teamRoutes.post('/', new CreateTeamController().handle);
teamRoutes.get('/', new FindAllTeamsController().handle);
teamRoutes.get('/user/:id', new FindTeamsByUserIdController().handle);
teamRoutes.put('/:id', new UpdateTeamController().handle);
teamRoutes.delete('/:id', new DeleteTeamController().handle);

export { teamRoutes };

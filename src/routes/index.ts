import { Router } from 'express';

import { userRoutes } from './user.routes';
import { authenticateRoutes } from './authenticate.routes';
import { eventRoutes } from './event.routes';
import { userEventRoutes } from './user.event.routes';
import { gameRoutes } from './game.routes';
import { groupRoutes } from './group.routes';
import { permissionRoutes } from './permission.routes';
import { groupPermissionRoutes } from './group.permission.routes';
import { questRoutes } from './quest.routes';
import { userQuestRoutes } from './user.quest.routes';
import { teamRoutes } from './team.routes';
import { userTeamRoutes } from './user.team.routes';
import { attractionRoutes } from './attraction.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/session', authenticateRoutes);
router.use('/event', eventRoutes);
router.use('/userevent', userEventRoutes);
router.use('/game', gameRoutes);
router.use('/group', groupRoutes);
router.use('/permission', permissionRoutes);
router.use('/grouppermission', groupPermissionRoutes);
router.use('/quest', questRoutes);
router.use('/userQuest', userQuestRoutes);
router.use('/team', teamRoutes);
router.use('/userTeam', userTeamRoutes);
router.use('/attraction', attractionRoutes);

export { router };

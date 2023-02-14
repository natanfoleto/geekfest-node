import { Router } from 'express';

import { FindAllGamesController } from '@modules/game/useCases/findAllGames/findAllGamesController';
import { FindGameByIdController } from '@modules/game/useCases/findGameById/findGameByIdController';
import { CreateGameController } from '@modules/game/useCases/createGame/createGameController';
import { UpdateGameController } from '@modules/game/useCases/updateGame/updateGameController';
import { DeleteGameController } from '@modules/game/useCases/deleteGame/deleteGameController';

import { authentication } from '@middlewares/authentication';

const gameRoutes = Router();

gameRoutes.use(authentication);

gameRoutes.get('/', new FindAllGamesController().handle);
gameRoutes.get('/:id', new FindGameByIdController().handle);
gameRoutes.post('/', new CreateGameController().handle);
gameRoutes.put('/:id', new UpdateGameController().handle);
gameRoutes.delete('/:id', new DeleteGameController().handle);

export { gameRoutes };

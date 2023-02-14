import { Router } from 'express';

import { CreateQuestController } from '@modules/quest/useCase/createQuest/createQuestController';
import { FindAllQuestsController } from '@modules/quest/useCase/findAllQuests/findAllQuestsController';
import { UpdateQuestController } from '@modules/quest/useCase/updateQuest/updateQuestController';
import { DeleteQuestController } from '@modules/quest/useCase/deleteQuest/deleteQuestController';

const questRoutes = Router();

questRoutes.post('/', new CreateQuestController().handle);
questRoutes.get('/', new FindAllQuestsController().handle);
questRoutes.put('/:id', new UpdateQuestController().handle);
questRoutes.delete('/:id', new DeleteQuestController().handle);

export { questRoutes };

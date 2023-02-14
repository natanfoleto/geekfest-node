import { Router } from 'express';

import { FindAllAttractionsController } from '@modules/attraction/useCases/findAllAttractions/findAllAttractionsController';
import { CreateAttractionController } from '@modules/attraction/useCases/createAttraction/createAttractionController';
import { UpdateAttractionController } from '@modules/attraction/useCases/updateAttraction/updateAttractionController';
import { DeleteAttractionController } from '@modules/attraction/useCases/deleteAttraction/deleteAttractionController';

const attractionRoutes = Router();

attractionRoutes.get('/', new FindAllAttractionsController().handle);
attractionRoutes.post('/', new CreateAttractionController().handle);
attractionRoutes.put('/:id', new UpdateAttractionController().handle);
attractionRoutes.delete('/:id', new DeleteAttractionController().handle);

export { attractionRoutes };

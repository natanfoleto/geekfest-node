import { Router } from 'express';

import { FindAllEventsController } from '@modules/event/useCases/findAllEvents/findAllEventsController';
import { FindEventByIdController } from '@modules/event/useCases/findEventById/findEventByIdController';
import { CreateEventController } from '@modules/event/useCases/createEvent/createEventController';
import { UpdateEventController } from '@modules/event/useCases/updateEvent/updateEventController';
import { DeleteEventController } from '@modules/event/useCases/deleteEvent/deleteEventController';

import { authentication } from '@middlewares/authentication';

const eventRoutes = Router();

eventRoutes.use(authentication);

eventRoutes.get('/', new FindAllEventsController().handle);
eventRoutes.get('/:id', new FindEventByIdController().handle);
eventRoutes.post('/', new CreateEventController().handle);
eventRoutes.put('/:id', new UpdateEventController().handle);
eventRoutes.delete('/:id', new DeleteEventController().handle);

export { eventRoutes };

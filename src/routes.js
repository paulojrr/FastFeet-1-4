import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';

import auth from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.post('/recipients', auth, RecipientsController.store);
routes.put('/recipients/:id', auth, RecipientsController.update);

export default routes;

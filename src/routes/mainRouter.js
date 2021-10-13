import express from 'express';
import { mainController } from '../controllers';

const Router = express.Router();

Router.get('/category', mainController.getCategories);
Router.get('/banner/:group', mainController.getBanner);
Router.get('/event/:group', mainController.getEvent);


export default Router;

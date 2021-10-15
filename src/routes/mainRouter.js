import express from 'express';
import { mainController } from '../controllers';

const Router = express.Router();

Router.get('/category', mainController.getCategories);
Router.get('/allcategory', mainController.getAllCategories);
Router.get('/banner/:group', mainController.getBanner);
Router.get('/event/:group', mainController.getEvent);
Router.get('/event/mdspick/:category', mainController.getMDsPick);

export default Router;

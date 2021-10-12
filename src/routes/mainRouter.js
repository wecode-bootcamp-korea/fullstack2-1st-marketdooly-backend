import express from 'express';
import { mainController } from '../controllers';

const Router = express.Router();

Router.get('/category', mainController.getCategories);
Router.get('/carousel/:id', mainController.getCarouselData);
Router.get('/banner', mainController.getMainBannerData);
Router.get('/special-price', mainController.getSpecialPriceData);

export default Router;
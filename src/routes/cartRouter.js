import express from 'express';
import { cartController } from '../controllers';
import middlewares from '../../middlewares';

const cartRouter = express.Router();

cartRouter
  .post('/', cartController.addToCart)
  .get('/', middlewares.tokenController.verifyToken, cartController.getCart)
  .patch('/', cartController.updateItemQuantity)
  .delete('/', cartController.deleteItem)
  .delete('/several', cartController.deleteItems);

export default cartRouter;

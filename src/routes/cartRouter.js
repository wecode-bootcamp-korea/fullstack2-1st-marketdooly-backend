import express from 'express';
import { cartController } from '../controllers';

const cartRouter = express.Router();

cartRouter
  .get('', cartController.getCart)
  .put('', cartController.updateItemQuantity)
  .delete('', cartController.deleteItem)
  .post('/:id', cartController.addToCart);

export default cartRouter;

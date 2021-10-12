import express from 'express';
import { cartController } from '../controllers';

const cartRouter = express.Router();

cartRouter
  .get('', cartController.getCart)
  .put('', cartController.putItemQuantity)
  .delete('', cartController.deleteItem)
  .post('', cartController.postCart);

export default cartRouter;

import express from 'express';
import { cartController } from '../controllers';

const cartRouter = express.Router();

cartRouter
  .get('', verifyToken, cartController.getCart)
  .put('', cartController.updateItemQuantity)
  .delete('', cartController.deleteItem)
  .post('', cartController.postCart);

export default cartRouter;

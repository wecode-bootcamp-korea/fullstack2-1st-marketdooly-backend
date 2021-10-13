import express from 'express';
import { orderController } from '../controllers';

const orderRouter = express.Router();

orderRouter.post('', orderController.cartToOrder);

export default orderRouter;

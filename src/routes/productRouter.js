import express from 'express';
import { productDetailController } from '../controllers';
import reviewRouter from './reviewRouter';

const productRouter = express.Router();

productRouter.get('/:id', productDetailController.getProductDetail);
productRouter.use('/:id/reviews', reviewRouter);

export default productRouter;

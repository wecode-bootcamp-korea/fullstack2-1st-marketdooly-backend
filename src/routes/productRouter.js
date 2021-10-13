import express from 'express';
import { productDetailController } from '../controllers';
import reviewRouter from './reviewRouter';

const productRouter = express.Router();

productRouter.get('', productDetailController.getProductDetail);
productRouter.post('', productDetailController.postProductDetail);
productRouter.use('/:id/reviews', reviewRouter);

export default productRouter;

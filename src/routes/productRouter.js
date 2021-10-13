import express from 'express';
import { productDetailController } from '../controllers';
import { reviewController } from '../controllers';

const productRouter = express.Router();

productRouter.get('', productDetailController.getProductproduct);
productRouter.post('', productDetailController.postProductproduct);
router.use('/:id/reviews', reviewRouter);

export default productRouter;

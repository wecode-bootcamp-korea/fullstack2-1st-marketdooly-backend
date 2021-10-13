import express from 'express';
import { productDetailController } from '../controllers';
import { reviewController } from '../controllers';

const productRouter = express.Router();

productRouter.get('', productDetailController.getProductproduct);
productRouter.post('', productDetailController.postProductproduct);
router.use('/:id/reviews', reviewRouter);

productRouter
  .get('/:id/reviews', reviewController.getReviewList)
  .post('/:id/reviews', reviewController.createReview)
  .patch('/:id/reviews', reviewController.updateReview)
  .delete('/:id/reviews', reviewController.deleteReview);

export default productRouter;

import express from 'express';
import { reviewController } from '../controllers';

const reviewRouter = express.Router();

reviewRouter
  .get('', reviewController.getReviewList)
  .get('/count', reviewController.getTotalReviewCount)
  .post('', reviewController.createReview)
  .patch('', reviewController.updateReview)
  .delete('', reviewController.deleteReview);

export default reviewRouter;

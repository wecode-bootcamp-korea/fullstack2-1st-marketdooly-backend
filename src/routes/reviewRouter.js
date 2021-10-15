import express from 'express';
import { reviewController } from '../controllers';
import middlewares from '../../middlewares';

const reviewRouter = express.Router();

reviewRouter
  .get('', reviewController.getReviewList)
  .get('/count', reviewController.getTotalReviewCount)
  .post(
    '',
    middlewares.tokenController.verifyToken,
    reviewController.createReview
  )
  .patch(
    '',
    middlewares.tokenController.verifyToken,
    reviewController.updateReview
  )
  .delete(
    '',
    middlewares.tokenController.verifyToken,
    reviewController.deleteReview
  );

export default reviewRouter;

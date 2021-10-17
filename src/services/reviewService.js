import { reviewDao } from '../models';
import { asyncErrorCatcher } from '../utils';

const createReview = async reqBodyObj => {
  return await reviewDao.createReview(reqBodyObj);
};

const getTotalReviewCount = async productId => {
  return await reviewDao.getTotalReviewCount(productId);
};

const getReviewList = async reqQueryObj => {
  return await reviewDao.getReviewList(reqQueryObj);
};

const updateReview = async reqBodyObj => {
  return await reviewDao.updateReview(reqBodyObj);
};

const deleteReview = async reviewId => {
  return await reviewDao.deleteReview(reviewId);
};

export default {
  createReview,
  getTotalReviewCount,
  getReviewList,
  updateReview,
  deleteReview,
};

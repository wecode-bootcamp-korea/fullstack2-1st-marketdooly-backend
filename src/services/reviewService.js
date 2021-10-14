import { reviewDao } from '../models';

const createReview = async (title, text, userId) => {
  await reviewDao.createReview(title, text, userId);
};

const getTotalReviewCount = async productId => {
  return await reviewDao.getTotalReviewCount(productId);
};

const getReviewList = async query => {
  return await reviewDao.getReviewList(query);
};

const updateReview = async (reviewId, title, text) => {
  await reviewDao.updateReview(reviewId, title, text);
};

const deleteReview = async reviewId => {
  await reviewDao.deleteReview(reviewId);
};

export default {
  createReview,
  getTotalReviewCount,
  getReviewList,
  updateReview,
  deleteReview,
};

import { reviewDao } from '../models';

const createReview = async (title, text, userId) => {
  await reviewDao.createReview(title, text, userId);
};

const getReviewList = async (offset, limit) => {
  return await reviewDao.getReviewList(offset, limit);
};

const updateReview = async (reviewId, title, text) => {
  await reviewDao.updateReview(reviewId, title, text);
};

const deleteReview = async reviewId => {
  await reviewDao.deleteReview(reviewId);
};

export default { createReview, getReviewList, updateReview, deleteReview };

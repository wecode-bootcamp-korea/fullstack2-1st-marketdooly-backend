import e from 'express';
import { reviewDao } from '../models';

const createReview = async reqBodyObj => {
  await reviewDao.createReview(reqBodyObj);
};

const getTotalReviewCount = async productId => {
  return await reviewDao.getTotalReviewCount(productId);
};

const getReviewByReviewId = async reviewId => {
  return await reviewDao.getReviewByReviewId(reviewId);
};

const getReviewList = async query => {
  return await reviewDao.getReviewList(query);
};

const updateReview = async reqBodyObj => {
  await reviewDao.updateReview(reqBodyObj);
};

const deleteReview = async reviewId => {
  await reviewDao.deleteReview(reviewId);
};

export default {
  createReview,
  getTotalReviewCount,
  getReviewByReviewId,
  getReviewList,
  updateReview,
  deleteReview,
};

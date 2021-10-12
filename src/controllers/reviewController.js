import { reviewService } from '../services';

const createReview = async (req, res) => {
  const { title, text } = req.body;
  const userId = 1; // jwt.verify()로 userId 식별하는 middleware 필요
  await reviewService.createReview(title, text, userId);
  res.status(201).json({
    msg: 'CREATE_SUCCESS',
  });
};

const getReviewList = async (req, res) => {
  const { offset, limit } = req.query;
  const reviewList = await reviewService.getReviewList(offset, limit);
  res.status(200).json(reviewList);
};

const updateReview = async (req, res) => {
  const { reviewId, title, text } = req.body;
  await reviewService.updateReview(reviewId, title, text);
  res.status(200).json({
    msg: 'UPDATE_SUCCESS',
  });
};

const deleteReview = async (req, res) => {
  const { reviewId } = req.body;
  await reviewService.deleteReview(reviewId);
  res.status(200).json({
    msg: 'DELETE_SUCCESS',
  });
};

export default { createReview, getReviewList, updateReview, deleteReview };

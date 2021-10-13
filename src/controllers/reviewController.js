import { reviewService } from '../services';
import { asyncErrorCatcher, checkRequiredKey } from '../utils';

const createReview = asyncErrorCatcher(async (req, res, next) => {
  checkRequiredKey(req.body, 'title', 'text');

  const { title, text } = req.body;
  const userId = 1; // jwt.verify()로 userId 식별하는 middleware 필요
  await reviewService.createReview(title, text, userId);

  res.status(201).json({
    msg: 'CREATE_SUCCESS',
  });
});

const getReviewList = asyncErrorCatcher(async (req, res) => {
  checkRequiredKey(req.query, 'offset', 'limit');

  const { offset, limit } = req.query;
  const reviewList = await reviewService.getReviewList(offset, limit);

  res.status(200).json(reviewList);
});

const updateReview = asyncErrorCatcher(async (req, res) => {
  checkRequiredKey(req.body, 'reviewId', 'title', 'text');

  const { reviewId, title, text } = req.body;
  await reviewService.updateReview(reviewId, title, text);

  res.status(200).json({
    msg: 'UPDATE_SUCCESS',
  });
});

const deleteReview = asyncErrorCatcher(async (req, res) => {
  checkRequiredKey(req.body, 'reviewId');

  const { reviewId } = req.body;
  await reviewService.deleteReview(reviewId);

  res.status(200).json({
    msg: 'DELETE_SUCCESS',
  });
});

export default { createReview, getReviewList, updateReview, deleteReview };

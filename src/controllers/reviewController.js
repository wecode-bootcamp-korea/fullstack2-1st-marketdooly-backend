import { reviewService } from '../services';
import { asyncErrorCatcher, checkRequiredKey } from '../utils';

const createReview = asyncErrorCatcher(async (req, res, next) => {
  const keyList = ['productId', 'title', 'text'];
  checkRequiredKey(req.body, keyList);

  const userId = req.headers.payload.info[0].id;
  req.body.userId = userId;
  await reviewService.createReview(req.body);

  res.status(201).json({ status: 'success' });
});

const getTotalReviewCount = asyncErrorCatcher(async (req, res) => {
  const keyList = ['productId'];
  checkRequiredKey(req.query, keyList);

  const totalCountObj = await reviewService.getTotalReviewCount(
    req.query.productId
  );

  res.status(200).json(totalCountObj);
});

const getReviewList = asyncErrorCatcher(async (req, res) => {
  const keyList = ['productId', 'offset', 'limit'];
  checkRequiredKey(req.query, keyList);

  const reviewList = await reviewService.getReviewList(req.query);

  res.status(200).json(reviewList);
});

const updateReview = asyncErrorCatcher(async (req, res) => {
  const keyList = ['reviewId', 'userId', 'title', 'text'];
  checkRequiredKey(req.body, keyList);

  const loginUserId = req.headers.payload.info[0].id;
  if (req.body.userId === loginUserId) {
    await reviewService.updateReview(req.body);
    res.status(200).json({
      status: 'success',
    });
  } else {
    res.status(401).json({
      status: 'fail',
      msg: '본인 댓글만 수정할 수 있습니다',
    });
  }
});

const deleteReview = asyncErrorCatcher(async (req, res) => {
  const keyList = ['reviewId', 'userId'];
  checkRequiredKey(req.body, keyList);

  const loginUserId = req.headers.payload.info[0].id;
  if (req.body.userId === loginUserId) {
    await reviewService.deleteReview(req.body.reviewId);
    res.status(200).json({
      status: 'success',
    });
  } else {
    res.status(401).json({
      status: 'fail',
      msg: '본인 댓글만 삭제할 수 있습니다',
    });
  }
});

export default {
  createReview,
  getTotalReviewCount,
  getReviewList,
  updateReview,
  deleteReview,
};

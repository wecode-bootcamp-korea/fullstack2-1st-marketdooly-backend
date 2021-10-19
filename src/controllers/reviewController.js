import { reviewService } from '../services';
import { asyncErrorCatcher, checkRequiredKey } from '../utils';

const createReview = asyncErrorCatcher(async (req, res) => {
  const keyList = ['productId', 'title', 'text'];
  checkRequiredKey(req.body, keyList);

  const loginUserId = req.headers.payload.info[0].id;
  req.body.userId = loginUserId;

  if (loginUserId) {
    const reviewId = await reviewService.createReview(req.body);
    if (reviewId) {
      res.status(201).json({ reviewId });
    } else {
      throw new Error('CREATE_REVIEW_ERROR');
    }
  } else {
    res.status(401).json('로그인 후에 후기 작성이 가능합니다');
  }
});

const getTotalReviewCount = asyncErrorCatcher(async (req, res) => {
  const keyList = ['productId'];
  checkRequiredKey(req.query, keyList);

  const { productId } = req.query;
  const totalCount = await reviewService.getTotalReviewCount(productId);

  if (totalCount > 0) {
    res.status(200).json({ totalCount });
  } else if (totalCount === 0) {
    res.status(204).json({ totalCount });
  } else {
    throw new Error('GET_TOTAL_COUNT_ERROR');
  }
});

const getReviewList = asyncErrorCatcher(async (req, res) => {
  const keyList = ['productId', 'offset', 'limit'];
  checkRequiredKey(req.query, keyList);

  const reviewList = await reviewService.getReviewList(req.query);
  if (reviewList.length > 0) {
    res.status(200).json(reviewList);
  } else if (reviewList.length === 0) {
    res.status(204).json(reviewList);
  } else {
    throw new Error('GET_REVIEW_LIST_ERROR');
  }
});

const updateReview = asyncErrorCatcher(async (req, res) => {
  const keyList = ['reviewId', 'userId', 'title', 'text'];
  checkRequiredKey(req.body, keyList);

  const loginUserId = req.headers.payload.info[0].id;
  if (req.body.userId === loginUserId) {
    const reviewId = await reviewService.updateReview(req.body);
    if (reviewId) {
      res.status(200).json({ reviewId });
    } else {
      throw new Error('UPDATE_REVIEW_ERROR');
    }
  } else {
    res.status(401).json('본인 후기만 수정할 수 있습니다');
  }
});

const deleteReview = asyncErrorCatcher(async (req, res) => {
  const keyList = ['reviewId', 'userId'];
  checkRequiredKey(req.body, keyList);

  const loginUserId = req.headers.payload.info[0].id;
  if (req.body.userId === loginUserId) {
    const reviewId = await reviewService.deleteReview(req.body.reviewId);
    if (reviewId) {
      res.status(200).json({ reviewId });
    } else {
      throw new Error('DELETE_REVIEW_ERROR');
    }
  } else {
    res.status(401).json('본인 후기만 삭제할 수 있습니다');
  }
});

export default {
  createReview,
  getTotalReviewCount,
  getReviewList,
  updateReview,
  deleteReview,
};

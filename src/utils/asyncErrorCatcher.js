/**
 * 비동기 함수의 error를 next 처리해주는 wrapper 함수
 * @param {function} fn 비동기 함수
 * @return error next 처리
 */
const asyncErrorCatcher = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncErrorCatcher;

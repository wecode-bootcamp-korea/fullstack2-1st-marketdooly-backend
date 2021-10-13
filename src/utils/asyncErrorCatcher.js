/**
 * 비동기 함수의 error를 next 처리해주는 wrapper 함수
 * @param {function} fn 비동기 함수
 * @return error next 처리
 */
const asyncErrorCatcher = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default asyncErrorCatcher;

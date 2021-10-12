/**
 * object의 필수 key 포함 여부를 체크
 * @param {*} obj object
 * @param  {...string} keys 필수 key
 * @returns {boolean}
 */
const checkRequiredKey = (obj, ...keys) => {
  for (const key of [...keys]) {
    if (!Object.keys(obj).includes(key)) {
      const msg = `KEY ERROR: ${key} is missed`;
      throw new Error(msg);
    }
  }
};

export default checkRequiredKey;

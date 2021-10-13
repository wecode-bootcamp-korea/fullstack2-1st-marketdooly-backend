/**
 * object의 필수 key 포함 여부를 체크
 * @param {*} obj object
 * @param  {...string} keys 필수 key
 * @returns {boolean}
 */
const checkRequiredKey = (obj, ...keys) => {
  let missedKeyList = [];
  for (const key of [...keys]) {
    if (!Object.keys(obj).includes(key)) {
      missedKeyList.push(key);
    }
  }
  if (missedKeyList.length > 0) {
    throw new Error('KEY ERROR: ' + missedKeyList.join(', '));
  }
};

export default checkRequiredKey;

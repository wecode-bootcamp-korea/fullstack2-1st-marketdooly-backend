import bcrypt from 'bcrypt';
import { userDao } from '../models';

const login = async (account, password) => {
  const [userHash] = await userDao.searchUserPw(account);
  if (userHash.password) {
    const validPass = await bcrypt.compare(password, userHash.password);
    if (!validPass) {
      throw new Error('잘못된 비밀번호입니다.');
    } else {
      return '로그인 성공';
    }
  } else {
    throw new Error('유저가 존재하지 않습니다.');
  }
};

const signUp = async userData => {
  try {
    const presearching = await userDao.searchUserId(userData.account);
    if (presearching.length)
      throw new Error('이미 존재하는 아이디입니다. 다른 아이디를 선택해주세요');
    const hash = await bcrypt.hash(userData.password, 10);
    await userDao.createUser(Object.assign(userData, { hash }));
    return userData.email;
  } catch (err) {
    throw err;
  }
};

const findUser = async (email, name) => {
  try {
    const result = await userDao.findUser(email, name);
    if (!result.length)
      throw new Error(
        '고객님께서 입력하신 정보가 정확한지 다시 한 번 확인해주세요!'
      );
    return result;
  } catch (err) {
    throw err;
  }
};

const findPassword = async (account, email, name) => {
  try {
    const result = await userDao.findUser(email, name);
    if (!result.length || result[0].account !== account)
      throw new Error(
        '고객님께서 입력하신 정보가 정확한지 다시 한 번 확인해주세요!'
      );
    return result;
  } catch (err) {
    throw err;
  }
};

export default { login, signUp, findUser, findPassword };

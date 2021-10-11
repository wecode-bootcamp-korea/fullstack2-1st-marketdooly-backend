import bcrypt from 'bcrypt';
import { userDao } from '../models';

const login = async (userId, password) => {};

const signUp = async userData => {
  try {
    const presearching = await userDao.searchUser(userData.account);
    if (presearching.length)
      throw new Error('이미 존재하는 아이디입니다. 다른 아이디를 선택해주세요');
    const hash = await bcrypt.hash(userData.password, 10);
    await userDao.createUser(Object.assign(userData, { hash }));
    return userData.email;
  } catch (err) {
    throw err;
  }
};

const findUser = async accountName => {
  try {
    const result = await userDao.searchUser(accountName);
    if (!result.length) throw new Error('User not found');
    return result;
  } catch (err) {
    throw err;
  }
};

const findPassword = () => {};

export default { login, signUp, findUser, findPassword };

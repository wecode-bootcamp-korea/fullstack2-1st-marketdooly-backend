import { userDao } from '../models';
import utils from '../utils';

const getAllUsers = async () => {
  return await userDao.getAllUsers();
};

const login = async (account, password) => {
  const [userHash] = await userDao.searchUserPw(account);
  if (userHash.password) {
    const validPass = await utils.encrypt.decryptPassword(
      password,
      userHash.password
    );
    if (!validPass) {
      throw new Error('잘못된 비밀번호입니다.');
    } else {
      const userId = await userDao.getBasicUserInfo(account);
      return userId;
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
    const hash = await utils.encrypt.encryptPassword(userData.password, 10);
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
    const newPassword = utils.passwordGenerator();
    const newHash = await utils.encrypt.encryptPassword(newPassword, 10);
    await userDao.resetPassword(account, newHash);
    return newPassword;
  } catch (err) {
    throw err;
  }
};

export default { getAllUsers, login, signUp, findUser, findPassword };

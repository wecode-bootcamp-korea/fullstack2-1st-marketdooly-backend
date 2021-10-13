import { userDao } from '../models';
import { encrypt, passwordGenerator } from '../utils';

const getAllUsers = async () => {
  return await userDao.getAllUsers();
};

const checkDuplicateAccount = async account => {
  const result = await userDao.searchUserId(account);
  if (result.length) throw new Error('이미 존재하는 계정 이름입니다!');
  return null;
};

const checkDuplicateEmail = async email => {
  const result = await userDao.searchUserEmail(email);
  if (result.length) throw new Error('이미 존재하는 이메일입니다!');
  return null;
};

const login = async (account, password) => {
  const [userHash] = await userDao.searchUserPw(account);
  if (userHash.password) {
    const validPass = await encrypt.decryptPassword(
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
    const hash = await encrypt.encryptPassword(userData.password, 10);
    await userDao.createUser(Object.assign(userData, { hash }));
    return userData.email;
  } catch (err) {
    throw err;
  }
};

const findAccount = async (email, name) => {
  try {
    const result = await userDao.findAccount(email, name);
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
    const result = await userDao.findAccount(email, name);
    if (!result.length || result[0].account !== account)
      throw new Error(
        '고객님께서 입력하신 정보가 정확한지 다시 한 번 확인해주세요!'
      );
    const newPassword = passwordGenerator();
    const newHash = await encrypt.encryptPassword(newPassword, 10);
    await userDao.resetPassword(account, newHash);
    return newPassword;
  } catch (err) {
    throw err;
  }
};

export default {
  getAllUsers,
  login,
  signUp,
  findAccount,
  findPassword,
  checkDuplicateAccount,
  checkDuplicateEmail,
};

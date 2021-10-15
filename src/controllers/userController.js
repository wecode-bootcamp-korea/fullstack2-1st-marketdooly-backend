import { userService } from '../services';
import tokenController from '../../middlewares/tokenController';
import { checkRequiredKey } from '../utils';

const session = async (req, res) => {
  try {
    const { info } = req.headers.payload;
    const result = await userService.session(info);
    res.status(200).json({
      status: 'success',
      result,
    });
  } catch (err) {
    res.status(403).json({
      status: 'forbidden',
      message: err.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { info } = req.headers.payload;
    const { account, name, email } = info[0];
    if (
      account !== 'onecookie' ||
      name !== '이원국' ||
      email !== 'dooly@wecode.com'
    )
      throw new Error('접근 권한 없음');
    const result = await userService.getAllUsers();
    res.status(200).json({
      status: 'success',
      result,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const checkDuplicateAccount = async (req, res) => {
  try {
    const result = await userService.checkDuplicateAccount(req.body.account);
    res.status(200).json({
      status: 'success',
      result,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const checkDuplicateEmail = async (req, res) => {
  try {
    const result = await userService.checkDuplicateEmail(req.body.email);
    res.status(200).json({
      status: 'success',
      result,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const signUp = async (req, res) => {
  try {
    const requiredKeys = [
      'account',
      'name',
      'email',
      'password',
      'phone_number',
      'address',
      'gender',
      'birthday',
      'mandatory_policy_agreed',
      'personal_information_policy_agreed',
      'marketing_policy_agreed',
    ];
    await checkRequiredKey(req.body, requiredKeys);
    const result = await userService.signUp(req.body);
    res.status(201).json({
      status: 'success',
      result,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { account, password } = req.body;
    const result = await userService.login(account, password);
    await tokenController.responseWithIssuedToken(result, 200, res);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const findAccount = async (req, res) => {
  try {
    const { email, name } = req.body;
    const result = await userService.findAccount(email, name);
    res.status(200).json({
      status: 'success',
      message: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const findPassword = async (req, res) => {
  try {
    const { account, email, name } = req.body;
    const result = await userService.findPassword(account, email, name);
    res.status(200).json({
      status: 'success',
      message: '새로운 임시 비밀번호가 발급되었습니다!',
      tempPW: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

export default {
  session,
  getAllUsers,
  signUp,
  login,
  findAccount,
  findPassword,
  checkDuplicateAccount,
  checkDuplicateEmail,
};

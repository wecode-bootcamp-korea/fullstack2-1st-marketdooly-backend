import { userService } from '../services';
import tokenController from '../../middlewares/tokenController';

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

const signUp = async (req, res) => {
  try {
    const userInfo = req.body;
    const result = await userService.signUp(userInfo);
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

const findUser = async (req, res) => {
  try {
    const { email, name } = req.body;
    const result = await userService.findUser(email, name);
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

export default { getAllUsers, signUp, login, findUser, findPassword };
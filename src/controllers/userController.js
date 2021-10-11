import { userService } from '../services';

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
    await userService.findPassword(account, email, name);
    res.status(200).json({
      status: 'success',
      message: '이메일로 인증 완료후 비밀번호를 재발급 받으세요!',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

export default { signUp, login, findUser, findPassword };

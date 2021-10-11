import { userService } from '../services';

const signUp = async (req, res) => {
  try {
    const userInfo = req.body;
    const result = await userService.signUp(userInfo);
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

const login = (req, res) => {
  res.json({
    status: 'success',
    message: 'login',
  });
};

const findUser = async (req, res) => {
  try {
    const { account } = req.body;
    const result = await userService.findUser(account);
    res.json({
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

const findPassword = (req, res) => {
  res.json({
    status: 'success',
    message: 'find password',
  });
};

export default { signUp, login, findUser, findPassword };

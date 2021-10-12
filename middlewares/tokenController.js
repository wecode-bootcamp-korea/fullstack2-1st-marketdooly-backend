import dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });
import jwt from 'jsonwebtoken';
import utils from '../src/utils';

const cookieOptions = {
  httpOnly: true,
  expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN),
};

const issueAccessToken = info => {
  return jwt.sign({ info }, process.env.JWT_SECRET_KEY, {
    issuer: 'marketdooly',
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = async (info, statusCode, res) => {
  const token = issueAccessToken(info);
  res.cookie('jwt', token, cookieOptions);
  res.status(statusCode).json({
    status: 'success',
    token,
    data: info,
  });
};

export default { issueAccessToken, createSendToken };

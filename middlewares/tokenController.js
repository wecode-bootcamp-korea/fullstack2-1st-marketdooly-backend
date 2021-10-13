import dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });
import jwt from 'jsonwebtoken';

const cookieOptions = {
  httpOnly: true,
  expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN),
};

const issueAccessToken = info => {
  return jwt.sign({ info }, process.env.JWT_SECRET_KEY, {
    issuer: 'marketdooly',
    expiresIn: '1h',
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

const verifyToken = async (req, res, next) => {
  try {
    let accessToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      accessToken = req.headers.authorization.split(' ')[1];
    } else {
      return next(new Error('접근 권한이 없습니다.'));
    }
    const payload = await jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    req.headers.payload = payload;
    next();
  } catch (err) {
    next(err);
  }
};

export default { issueAccessToken, createSendToken, verifyToken };

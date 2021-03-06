import jwt from 'jsonwebtoken';

const cookieOptions = {
  httpOnly: true,
  expires: new Date(Date.now() + process.env.JWT_EXPIRES_IN),
};

const issueAccessToken = info => {
  return jwt.sign({ info }, process.env.JWT_SECRET_KEY, {
    issuer: 'marketdooly',
    expiresIn: '3h',
  });
};

const responseWithIssuedToken = async (info, statusCode, res) => {
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
    const { cookie } = req.headers;
    let accessToken;
    if (cookie && cookie.startsWith('jwt')) {
      accessToken = cookie.split('=')[1];
    } else {
      const err = new Error('접근 권한이 없습니다.');
      err.status = 401;
      return next(err);
    }
    const payload = await jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    req.headers.payload = payload;
    next();
  } catch (err) {
    next(err);
  }
};

export default { issueAccessToken, responseWithIssuedToken, verifyToken };

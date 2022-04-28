const Jwt = require('jsonwebtoken');
const HTTPCodes = require('../Utils/HTTPCodes');

const secret = 'secret';

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(HTTPCodes.UNAUTHORIZED).json({
      error: 'No token provided',
    });
  }

  try {
    const decoded = Jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (_err) {
    return res.status(401).json({
      error: 'Invalid token',
    });
  }
};

module.exports = validateToken;
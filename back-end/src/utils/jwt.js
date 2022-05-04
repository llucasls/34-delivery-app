const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const JWT_SECRET = fs.readFileSync(
  path.join(__dirname, '..', '..', 'jwt.evaluation.key'), 'utf-8',
);

const sign = (payload, duration = '4383000h') => jwt.sign(
  payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: duration,
  },
);

const verify = (token) => jwt.verify(
  token, JWT_SECRET, { algorithms: ['HS256'] },
);

module.exports = { sign, verify };

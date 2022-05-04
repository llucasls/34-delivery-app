const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const JWT_SECRET = fs.readFileSync(
  path.join(__dirname, '..', '..', 'jwt.evaluation.key'), 'utf-8',
);

<<<<<<< HEAD
const sign = (payload, duration = '1000h') => jwt.sign(
=======
const sign = (payload, duration = '4383000h') => jwt.sign(
>>>>>>> 7c002c20443993658c1424ccdbc715ebd048cb6a
  payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: duration,
  },
);

const verify = (token) => jwt.verify(
  token, JWT_SECRET, { algorithms: ['HS256'] },
);

module.exports = { sign, verify };
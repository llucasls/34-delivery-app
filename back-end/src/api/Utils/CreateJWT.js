const JWT = require('jsonwebtoken');

const secret = 'secret';

const CreateJWT = (user) => {
  const token = JWT.sign({ user }, secret, { expiresIn: '24h' });
  return token;
};

module.exports = CreateJWT;
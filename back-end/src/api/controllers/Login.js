const crypto = require('crypto');
const userService = require('../services/User');
const CreateJWT = require('../Utils/CreateJWT');
const HTTPCodes = require('../Utils/HTTPCodes');

const Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getUser({ email });
  const userPassword = user.password;
  const hash = crypto.createHash('md5').update(password).digest('hex');

  if (userPassword !== hash) {
    return res.status(HTTPCodes.UNAUTHORIZED).json({
      error: 'Invalid email or password',
    });
  }

  const { role, name } = user;

  return res.status(HTTPCodes.OK).json({
    token: CreateJWT({ email, role }),
    name,
    role,
  });
};

const Register = async (req, res) => {
  const { email, password, name } = req.body;
  const userTest = await userService.getUser({ email, name });

  if (userTest) {
    return res.status(HTTPCodes.CONFLICT).json({
      error: 'email or user already exists',
    });
  }

  const hash = crypto.createHash('md5').update(password).digest('hex');
  const user = await userService.createUser({ email, password: hash, name, role: 'customer' });

  return res.status(HTTPCodes.CREATED).json({
    token: CreateJWT({ email, role: 'customer' }),
    name: user.name,
    role: 'customer',
  });
};

module.exports = { Login, Register };
const crypto = require('crypto');
const userService = require('../services/User');
const { sign } = require('../../utils/jwt');
const HTTPCodes = require('../../utils/HTTPCodes');

const Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getUser({ email });

  const unauthorized = () => res.status(HTTPCodes.NOT_FOUND).json({
    error: 'Invalid email or password',
  });
  if (!user) return unauthorized();
  const userPassword = user.password;
  const hash = crypto.createHash('md5').update(password).digest('hex');
  if (userPassword !== hash) return unauthorized();

  const { role, name } = user;
  return res.status(HTTPCodes.OK).json({
    token: sign({ email, role }),
    name,
    role,
    email,
  });
};

const Register = async (req, res) => {
  const { email, password, name, role } = req.body;
  const userTest = await userService.getUser({ name }) || await userService.getUser({ email });

  if (userTest) res.status(HTTPCodes.CONFLICT).json({ error: 'email or user already exists' });

  const hash = crypto.createHash('md5').update(password).digest('hex');
  const user = await userService.createUser({
    email,
    password: hash,
    name,
    role: role || 'customer',
  });

  return res.status(HTTPCodes.CREATED).json({
    token: sign({ email, role: role || 'customer' }),
    name: user.name,
    role: user.role,
  });
};

module.exports = { Login, Register };

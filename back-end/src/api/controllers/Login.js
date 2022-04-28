const crypto = require('crypto');
const userService = require('../services/User');
const CreateJWT = require('../Utils/CreateJWT');
const HTTPCodes = require('../Utils/HTTPCodes');

const Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getUser(email);
  const userPassword = user.password;
  const hash = crypto.createHash('md5').update(password).digest('hex');

  if (userPassword !== hash) {
    return res.status(HTTPCodes.UNAUTHORIZED).json({
      error: 'Invalid email or password',
    });
  }

  const { role, name } = user;
  console.log(user);
  return res.status(HTTPCodes.OK).json({
    token: CreateJWT({ email, role }),
    name,
    role,
  });
};

module.exports = Login;
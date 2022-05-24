const usersService = require('../services/User');
const HTTPCodes = require('../../utils/HTTPCodes');

const getSellers = async (req, res) => {
  const sellers = await usersService.getSellers();

  res.status(HTTPCodes.OK).json(sellers);
};

const getUser = async (req, res) => {
  const user = await usersService.getUser(req.params);

  res.status(HTTPCodes.OK).json(user);
};

const getAllUsers = async (req, res) => {
  const users = await usersService.getAllUsers();

  res.status(HTTPCodes.OK).json(users);
};

const deleteUser = async (req, res) => {
  const { email } = req.params;

  const user = await usersService.deleteUser(email);

  if (!user) {
    return res.status(HTTPCodes.NOT_FOUND).json({
      message: 'User not found',
    });
  }

  return res.status(HTTPCodes.OK).json({ message: 'User deleted successfully' });
};

module.exports = { getSellers, getUser, getAllUsers, deleteUser };
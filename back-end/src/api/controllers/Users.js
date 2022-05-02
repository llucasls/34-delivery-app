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

module.exports = { getSellers, getUser };
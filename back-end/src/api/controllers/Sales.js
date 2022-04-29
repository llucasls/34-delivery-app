const { salesService, usersService } = require('../services');
const HTTPCodes = require('../../utils/HTTPCodes');

const getAll = async (req, res) => {
  const { email } = req.user;

  const user = usersService.getUser({ email });
  const sales = await salesService.getAll(user.id);

  res.status(HTTPCodes.OK).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const sale = await salesService.getById(id);

  res.status(HTTPCodes.OK).json(sale);
};

const create = async (req, res) => {
  const sale = await salesService.create(req.body);

  res.status(HTTPCodes.OK).json(sale);
};

module.exports = { getAll, getById, create };
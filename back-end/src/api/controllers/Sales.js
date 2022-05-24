const { salesService, usersService } = require('../services');
const HTTPCodes = require('../../utils/HTTPCodes');

const getAll = async (req, res) => {
  const { email } = req.user;

  const user = await usersService.getUser({ email });

  const sales = await salesService.getAll(user.id);

  if (!sales) {
    return res.status(HTTPCodes.NOT_FOUND).json({
      error: 'No sales found',
    });
  }

  res.status(HTTPCodes.OK).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const sale = await salesService.getById(id);

  if (!sale) {
    return res.status(HTTPCodes.NOT_FOUND).json({
      error: 'No sale found',
    });
  }

  res.status(HTTPCodes.OK).json(sale);
};

const create = async (req, res) => {
  const { email } = req.user;
  const user = await usersService.getUser({ email });

  const sale = await salesService.create({ ...req.body, userId: user.id });

  res.status(HTTPCodes.CREATED).json(sale);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sale = await salesService.update({ id, status });

  if (!sale) {
    return res.status(HTTPCodes.NOT_FOUND).json({
      error: 'No sale found',
    });
  }

  return res.status(HTTPCodes.OK).json({ sale });
};

module.exports = { getAll, getById, create, update };
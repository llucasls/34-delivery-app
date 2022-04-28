const productsService = require('../services/Products');

const getAll = async (req, res) => {
  const products = await productsService.getAll();

  res.status(200).json(products);
};

module.exports = { getAll };
const { Sales, SalesProducts, Products } = require('../../database/models');

const getAll = async (id) => Sales.findAll({ 
  include: [{ model: Products, as: 'products' }], where: { userId: id } });

const getById = async (id) => Sales.findOne({ raw: true, where: { id } });

const create = async (data) => {
  const { userId, sellerId,
    totalPrice, deliveryAddress, deliveryNumber, saleDate, products,
  } = data;
  const sale = await Sales.create({ 
    sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status: 'pending', userId });

    await SalesProducts.bulkCreate(products.map((product) => ({ ...product, saleId: sale.id })));

  return Sales.findByPk(sale.id, { include: [{ model: Products, as: 'products' }] });
};

module.exports = { getAll, getById, create };
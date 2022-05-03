const { Op } = require('sequelize');
const { Sales, SalesProducts, Products } = require('../../database/models');

const getAll = async (id) => Sales.findAll({ 
  include: [{ model: Products, as: 'products' }], 
  where: { [Op.or]: [{ userId: id }, { sellerId: id }] } });

const getById = async (id) => Sales.findOne({ raw: true,
  include: [{ model: Products, as: 'products' }],
   where: { id } });

const create = async (data) => {
  const { userId, sellerId,
    totalPrice, deliveryAddress, deliveryNumber, saleDate, products,
  } = data;
  const sale = await Sales.create({ 
    sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status: 'Pendente', userId });

    await SalesProducts.bulkCreate(products.map((product) => ({ ...product, saleId: sale.id })));

  return Sales.findByPk(sale.id, { include: [{ model: Products, as: 'products' }] });
};

const update = async ({ id, status }) => {
  const sale = await Sales.findByPk(id);
  sale.status = status;
  await sale.save();
  return sale;
};

module.exports = { getAll, getById, create, update };
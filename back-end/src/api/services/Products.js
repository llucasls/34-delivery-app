const { Products } = require('../../database/models');

const getAll = async () => Products.findAll({ raw: true });

const getById = async (id) => Products.findOne({ raw: true, where: { id } });

module.exports = { getAll, getById };
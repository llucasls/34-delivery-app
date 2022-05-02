const { Sales } = require('../../database/models');

const getAll = async (id) => Sales.findAll({ raw: true, where: { userId: id } });

const getById = async (id) => Sales.findOne({ raw: true, where: { id } });

const create = async (data) => Sales.create(data);

module.exports = { getAll, getById, create };
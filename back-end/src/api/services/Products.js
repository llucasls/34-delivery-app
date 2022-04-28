const { Products } = require('../../database/models');

const getAll = async () => Products.findAll({ raw: true });

module.exports = { getAll };
const { Users } = require('../../database/models');

const getUser = (data) => Users.findOne({ raw: true, where: data });

const getSellers = () => Users.findAll({ raw: true, where: { role: 'seller' } });

const createUser = (user) => Users.create(user);

module.exports = { getUser, createUser, getSellers };
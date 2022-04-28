const { Users } = require('../../database/models');

const getUser = (data) => Users.findOne({ raw: true, where: data });

const createUser = (user) => Users.create(user);

module.exports = { getUser, createUser };
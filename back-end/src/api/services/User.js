const { Users } = require('../../database/models');

const getUser = (email) => Users.findOne({ raw: true, where: { email } });

const createUser = (user) => Users.create(user);

module.exports = { getUser, createUser };
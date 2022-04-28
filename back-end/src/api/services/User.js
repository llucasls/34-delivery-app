const { Users } = require('../../database/models');

const getUser = (email) => Users.findOne({ raw: true, where: { email } });

const aa = 'a';

module.exports = { getUser, aa };
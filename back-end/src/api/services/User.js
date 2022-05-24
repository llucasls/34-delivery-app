const { Op } = require('sequelize');
const { Users } = require('../../database/models');

const getUser = (data) => Users.findOne({ raw: true, where: data });

const getSellers = () => Users.findAll({ raw: true,
  attributes: { exclude: ['password'] },
where: { role: 'seller' }, 
});

const getAllUsers = () => Users.findAll(
  { raw: true,
where: { role: { [Op.not]: 'administrator' } }, 
  attributes: { exclude: ['password'] } },
);

const createUser = (user) => Users.create(user);

const deleteUser = (email) => Users.destroy({ where: { email }, 
  attributes: { exclude: ['password'] } });

module.exports = { getUser, createUser, getSellers, getAllUsers, deleteUser };
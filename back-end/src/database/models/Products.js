'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      price: DataTypes.NUMBER,
      url_image: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  return Products;
};
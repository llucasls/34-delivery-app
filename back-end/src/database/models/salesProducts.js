'use strict';
module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    'SalesProducts',
    {
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: 'salesProducts',
      timestamps: false,
      underscored: true,
    },
  );

  SalesProducts.associate = (model) => {
    model.Sales.belongsToMany(
      model.Products, {
        as: 'products',
        through: SalesProducts,
        foreignKey: 'saleId',
        otherKey: 'productId',
      }
    );

    model.Products.belongsToMany(
      model.Sales, {
        as: 'sales',
        through: SalesProducts,
        foreignKey: 'productId',
        otherKey: 'saleId',
      }
    );
  };

  return SalesProducts;
};
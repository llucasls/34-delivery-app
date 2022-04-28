'use strict';
module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    'SalesProducts',
    {
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    },
  );

  SalesProducts.associate((model) => {
    model.Sales.belongsToMany(
      model.Products, {
        as: 'products',
        through: SalesProducts,
        foreignKey: 'sales_id',
        otherKey: 'product_id',
      }
    );
  });

  SalesProducts.associate((model) => {
    model.Products.belongsToMany(
      model.Sales, {
        as: 'sales',
        through: SalesProducts,
        foreignKey: 'product_id',
        otherKey: 'sales_id',
      }
    );
  });


  return SalesProducts;
};
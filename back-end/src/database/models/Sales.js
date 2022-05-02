'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      sellerId: { type: DataTypes.INTEGER, foreignKey: true },
      totalPrice: DataTypes.DECIMAL(9,2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      tableName: 'sales',
      timestamps: false,
      underscored: true,
    },
  );

  Sales.associate = (model) => {
    Sales.belongsTo(model.Users,
      {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    );
        Sales.belongsTo(model.Users,
      {
        foreignKey: 'seller_id',
        as: 'seller',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    );
  };

  return Sales;
};
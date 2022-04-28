'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      user_id: { type: DataTypes.INTEGER, foreignKey: true },
      seller_id: { type: DataTypes.INTEGER, foreignKey: true },
      total_price: DataTypes.DECIMAL(9,2),
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      timestamps: false,
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
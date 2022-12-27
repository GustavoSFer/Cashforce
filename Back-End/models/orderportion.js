const Orderportion = (sequelize, DataTypes) => {
  const Orderportion = sequelize.define("Orderportion", {
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.STRING,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'orderportions',
  });

  Orderportion.associate = (models) => {
    Orderportion.hasOne(models.Order, { targetKey: 'orderId', as: 'order_id' });
  }

  return Orderportion;
};
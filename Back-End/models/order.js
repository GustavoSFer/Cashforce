const Order = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    cnpjId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    buyerId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'orders',
  });

  Order.associate = (models) => {
    Order.hasOne(models.Cnpj, { targetKey: 'cnpjId', as: 'cnpj_id' });
    Order.hasOne(models.User, { targetKey: 'userId', as: 'user_id' });
    Order.belongsMany(models.Buyer, { targetKey: 'buyerId', as: 'buyer_id' });
    Order.belongsMany(models.Provider, { targetKey: 'providerId', as: 'provider_id' });
  }

  return Order;
};
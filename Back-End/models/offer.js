const Offer = (sequelize, DataTypes) => {
  const Offer = sequelize.define("Offer", {
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.STRING,
    paymentStatusProvider: DataTypes.STRING,
    orderId: DataTypes.INTEGER,
    sponsorId: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'offers',
  });

  Offer.associate = (models) => {
    Offer.hasOne(models.Order, { targetKey: 'orderId', as: 'order_id' });
    Offer.hasOne(models.Sponsor, { targetKey: 'sponsorId', as: 'sponsor_id' });
  }

  return Offer;
};
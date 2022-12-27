const Buyer = (sequelize, DataTypes) => {
  const Buyer = sequelize.define("Buyer", {
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    cnpjId: DataTypes.INTEGER,
    confirm: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'buyers',
  });

  Buyer.associate = (models) => {
    Buyer.hasOne(models.Cnpj, { targetKey: 'cnpjId', as: 'cnpj_id' });
  }

  return Buyer;
};

module.exports = Buyer;

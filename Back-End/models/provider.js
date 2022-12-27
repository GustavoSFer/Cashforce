const Provider = (sequelize, DataTypes) => {
  const Provider = sequelize.define("Provider", {
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
    bank: DataTypes.STRING,
    bankAgency: DataTypes.STRING,
    account: DataTypes.STRING,
    documents: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    cnpjId: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'providers',
  });

  Provider.associate = (models) => {
    Provider.hasOne(models.Cnpj, { targetKey: 'cnpjId', as: 'cnpj_id' });
  }


  return Provider;
};

module.exports = Provider;

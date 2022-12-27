const Cnpj = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define("Cnpj", {
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'cnpjs',
  });
  return Cnpj;
};

module.exports = Cnpj;

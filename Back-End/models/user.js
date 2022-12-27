const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.STRING,
    cashforceAdm: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'users',
  });
  return User;
};

module.exports = User;
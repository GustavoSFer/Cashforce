const { User } = require('../../models');

const getAll = async () => {
  console.log('model');
  const all = await User.findAll();
  // console.log('all  -> ', all);
  return all;
};

module.exports = {
  getAll,
};

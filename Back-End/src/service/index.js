const model = require('../model');

const getAll = async () => {
  console.log('Service');
  const all = await model.getAll();

  return all;
};

module.exports = {
  getAll,
};

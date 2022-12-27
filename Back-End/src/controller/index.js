const service = require('../service');

const getAll = async (req, res) => {
  console.log('controller');
  const all = await service.getAll();

  return res.status(200).json(all);
};

module.exports = {
  getAll,
};

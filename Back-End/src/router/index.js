const { Router } = require('express');
const controller = require('../controller');

const route = Router();

route.get('/', controller.getAll);

module.exports = route;

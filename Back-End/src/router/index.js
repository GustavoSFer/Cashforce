const { Router } = require('express');
const controller = require('../controller');

const route = Router();

route.get('/', controller.getAll);
route.get('/user', controller.getUser);

module.exports = route;

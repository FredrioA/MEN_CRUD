const express = require('express');
const route = express.Router();

const services = require('../services/render')
const controller = require('../controller/controller')

route.get('/', services.homeRoutes);
route.get('/add-data', services.add_data);
route.get('/update-data', services.update_data);

//API
route.post('/api/data', controller.create);
route.get('/api/data', controller.find);
route.put('/api/data/:id', controller.update);
route.delete('/api/data/:id', controller.delete);

module.exports = route
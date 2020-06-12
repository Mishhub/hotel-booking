const express = require('express');
const routers = express.Router();
const users = require('./users')
const hotel = require('./hotel')

routers.use('/',users);
routers.use('/hotel',hotel);



module.exports = routers;

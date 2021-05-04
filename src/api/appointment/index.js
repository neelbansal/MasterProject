
var express = require('express');
var router = express.Router();


var Appointment = require('./model');
Appointment.methods(['get', 'put', 'post', 'delete']);
Appointment.register(router, '/appointments');

module.exports = router;

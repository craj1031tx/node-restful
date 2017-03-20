//routing file

var express = require('express');
var router = express.Router();

//the model
var User = require('../models/user')

User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users')




//returning router as module
module.exports = router;

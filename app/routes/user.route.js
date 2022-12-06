// const express = require("express");
// const user_Router = express.Router();
// const for_create_user = require('../controllers/user.controller')

// user_Router.post('/api/add_user' ,for_create_user);





// module.exports = user_Router;


const express = require('express');
const user_Router = express.Router();
const {create_user} = require('../controllers/user.controller')

user_Router.post('/api/add_user' , create_user);


module.exports= user_Router;
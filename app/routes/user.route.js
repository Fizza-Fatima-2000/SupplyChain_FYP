// const express = require("express");
// const user_Router = express.Router();
// const for_create_user = require('../controllers/user.controller')

// user_Router.post('/api/add_user' ,for_create_user);





// module.exports = user_Router;


const express = require('express');
const user_Router = express.Router();
const {create_user , for_get_list_of_user} = require('../controllers/user.controller')

user_Router.post('/api/add_user' , create_user);
user_Router.get('/api/get_user_list' , for_get_list_of_user);


module.exports= user_Router;
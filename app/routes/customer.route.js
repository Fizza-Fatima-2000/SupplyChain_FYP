const express = require('express');
const Customer_Router = express.Router();
const {create_customer , get_customer} = require('../controllers/customer.controller')

//for add customer
Customer_Router.post('/api/add_customer' , create_customer);

//for get Customer
Customer_Router.get('/api/get_customer_list' , get_customer)




module.exports= Customer_Router;
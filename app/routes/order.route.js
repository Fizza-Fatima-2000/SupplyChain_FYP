const express = require('express')
const Order_Router= express.Router();
const  {add_order , get_order , delete_order, Update_Order} = require('../controllers/order.controller')
//for add Order
Order_Router.post('/api/add_order' ,  add_order)

//for get order list 
Order_Router.get('/api/get_order_list' , get_order)
//for delete order

Order_Router.delete('/api/delete_order' , delete_order)

//update order
Order_Router.patch('/api/update_order' , Update_Order )

module.exports= Order_Router;
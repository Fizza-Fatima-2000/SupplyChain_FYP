const express = require('express')
const {add_wholeseller ,  get_wholeseller } = require('../controllers/wholeseller.controller')
const wholeseller_routes = express.Router();

//for add wholeseller
wholeseller_routes.post('/api/add_wholeseller'  , add_wholeseller)

//for get wholeseller
wholeseller_routes.get('/api/get_wholeseller' ,  get_wholeseller)



module.exports= wholeseller_routes
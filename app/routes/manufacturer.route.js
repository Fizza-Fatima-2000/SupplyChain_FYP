const express = require("express");
const manufacturer_router = express.Router();
const {Signup , signIn} = require('../controllers/manufacturer.controller');

// FOR ADD DISTRIBUTOR
manufacturer_router.post('/api/for_signup' ,Signup);

// FOR GET ALL DETAILS OF DISTRIBUTOR
manufacturer_router.post('/api/for_signin' ,signIn);



module.exports = manufacturer_router;



const express = require("express");
const distributor_router = express.Router();
const {distributor_details , get_distributor_details} = require('../controllers/distributor.controller');
const verifyAdmin = require("../middleware/admin.auth");
const verifyToken = require("../middleware/auth");
// FOR ADD DISTRIBUTOR
distributor_router.post('/api/add_distributor' ,[verifyToken, verifyAdmin] ,distributor_details);

// FOR GET ALL DETAILS OF DISTRIBUTOR
distributor_router.get('/api/get_distributor_details' ,get_distributor_details);



module.exports = distributor_router;



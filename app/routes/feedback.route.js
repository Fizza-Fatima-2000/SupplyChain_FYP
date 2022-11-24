const express = require('express')
const Feedback_Router = express.Router();
const  {add_feedback , get_feedback_list }= require('../controllers/feedback.controller')

//for add Feedback
Feedback_Router.post('/api/add_feedback' , add_feedback)
//for get Feedback
Feedback_Router.get('/api/get_feedback' , get_feedback_list ) 



module.exports = Feedback_Router
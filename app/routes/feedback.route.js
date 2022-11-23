const express = require('express')
const Feedback_Router = express.Router();
const  {add_feedback , get_feedback_list , delete_feedback ,update_feedback }= require('../controllers/feedback.controller')

//for add Feedback
Feedback_Router.post('/api/add_feedback' , add_feedback)
//for get Feedback
Feedback_Router.get('/api/get_feedback' , get_feedback_list ) 

Feedback_Router.delete('/api/delete_feedback' , delete_feedback)

Feedback_Router.patch('/api/update_feedback' , update_feedback)

module.exports = Feedback_Router
const express = require('express');
const feedback = require('../models/feedback')
const helperfunction = require('../utils/helperfunction')
//for add feedback
const add_feedback = async(req,res)=>{
    try {
        const {Feedback, Customer_CNIC , Customer_ID, Product_ID } = req.body
        const for_feedback = await feedback.create({
            Feedback,
            Customer_CNIC,
            Customer_ID,
            Product_ID

        })
         const for_save_feedback = await for_feedback.save();
         return res.status(200).send({Response : 200 , message:"Feedback  " , status: true , Data: for_save_feedback })
    } catch (error) {
        res.send(error)
    }
   
}
 const get_feedback_list = async(req,res)=>{
    try {
        const for_get_feedback = await feedback.find({})
        return res.status(200).send({Response : 200 , message : "All feeback list" , status : true , Data: get_feedback_list})
    } catch (error) {
        res.send(error)
    }
  
 }

 const delete_feedback = async(req,res)=>{
    try {
        const for_delete_feedback = await feedback.delete({
            id : req.body.id
        })
        console.log(for_delete_feedback);
        return res.status(200).send({Response: 200 , message :"your feedback is deleted" , status: true , Data:for_delete_feedback})
    } catch (error) {
        console.log(error);
        return res.stauts(400).send({Response:400 , message :"failed to deleted your feedback" , status: false})
    }
   
 }
 const update_feedback = async(req, res)=>{
    try {
        const for_update_feedback = await feedback.update({
            feedback : req.body.feedback
        })
        console.log(for_update_feedback);
        return res.status(200).send({Response : 200 , message: "feedback Updated" , status: true , Data:update_feedback})
    } catch (error) {
        console.log(error);
        return res.status(400).send({Response: 400 , message:"failed to updated your feedback" , status : false })
    }
 }




module.exports=  {add_feedback , get_feedback_list , delete_feedback , update_feedback};
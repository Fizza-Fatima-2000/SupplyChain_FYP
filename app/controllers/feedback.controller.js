const express = require('express');
const feedback = require('../models/feedback')

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
         return res.status(200).send({Response : 200 , message:"Feedback" , status: true , Data: for_save_feedback })
    } catch (error) {
        res.send(error)
    }
   
}
 const get_feedback_list = async(req,res)=>{
    try {
        const for_get_feedback = await feedback.find({})
        return res.status(200).send({Response : 200 , message : " All feeback" , status : true , Data: get_feedback_list})
    } catch (error) {
        res.send(error)
    }
  
 }




module.exports=  {add_feedback , get_feedback_list};
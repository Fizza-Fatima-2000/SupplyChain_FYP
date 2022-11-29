const express = require('express')
const customer = require('../models/customer')

//for add customer 
const create_customer = async(req,res)=>{
    try {
        const {Customer_Name , Customer_Phone , Customer_CNIC, Package_ID , Order_ID , FeedBack_ID } = req.body;
        const for_add_customer = await customer.create({
            Customer_Name,
            Customer_CNIC,
            Customer_Phone,
            Package_ID,
            // Order_ID,
            // FeedBack_ID
    
        })
        const for_save_customer_details = await for_add_customer.save();
        return res.status(200).send({ response: 200, message: "Customer Details",status: true,Data: for_save_customer_details, }); 
    } catch (error) {
        res.send(error)
    }

}

const get_customer = async (req, res)=>{
    try {
        const for_get_customer = await customer.find({})
        return res.status(200).send({response :200 , message :"Customers List" , status: true , Data: for_get_customer})

    } catch (error) {
        res.send(error)
    }

}

module.exports= {create_customer , get_customer}; 
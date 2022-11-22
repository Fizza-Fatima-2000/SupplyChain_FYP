const express = require('express');
const order = require("../models/order");

const add_order = async (req, res) => {
  try {
    const {
      Order_Date,
      Product_Quantity,
      Customer_ID,
      WholeSaler_ID,
      Product_ID,
    } = req.body;
    const for_order_add = await order.create({
      Order_Date: Order_Date,
      Product_ID: Product_ID,
      Customer_ID : Customer_ID,
      WholeSaler_ID : WholeSaler_ID,
      Product_Quantity: Product_Quantity
    });
    const for_save_order = await for_order_add.save();
    return res.status(200).send({ response: 200, message: " Add Order",status: true,Data: for_save_order, });
  } catch (error) {
    res.send(error)
  }
};


const get_order = async(req,res)=>{
    try {
        const for_get_order = await order.find({

        })
        return res.status(200).send({response :200 , message :"list of orders" , status : true , Data: for_get_order})
    } catch (error) {
        res.send(error)
        
    }
}
module.exports = {add_order , get_order} 
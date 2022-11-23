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

 const delete_order = async(req, res)=>{
  try {
    const for_delete_order =await order.delete({
      id : req.body.id
    })
    console.log("deleted" , for_delete_order)
    return res.status(200).send({response :200 , message: "your order is deleted"  , status : true , Data : for_delete_order})
  } catch (error) {
    console.log(error);
    res.send(error)
    
  }
 
 }

const Update_Order = async(req,res)=>{
  try {
    const for_update = await order.update({
      Product_Quantity : req.body.Product_Quantity
    })
    return res.status(200).send({response :200 , message:"product_quantity_updated" , status:true , Data: for_update})
  } catch (error) {
    console.log(error);
    return res.status(400).send({response:400 , message:"failed to update product quantity" ,status: 400})
  }
}

module.exports = {add_order , get_order , delete_order} 
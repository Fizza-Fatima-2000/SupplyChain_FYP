const express = require("express");
const wholesaler = require("../models/wholeseller");
const helperfunction = require("../utils/helperfunction");

//FOR ADD WHOLESELER
const add_wholeseller = async (req, res) => {
  try {
    const {
      WholeSaler_Name,
      WholeSaler_Address,
      WholeSaler_Phone,
      Distributor_ID,
      Product_ID,
    } = req.body;
    const for_add_wholeseller = await new wholesaler({
      WholeSaler_Name,
      WholeSaler_Address,
      WholeSaler_Phone,
      Distributor_ID,
      Product_ID,
    });
    const for_save_wholeseller = await for_add_wholeseller.save();
    console.log(for_add_wholeseller);
    return res
      .status(200)
      .send({
        response: 200,
        message: "Wholeseller Details",
        status: true,
        Data: for_save_wholeseller,
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

//FOR GET WHOLESELLER
const get_wholeseller = async (req, res)=>{
    try {
        const for_get_wholeseller = await wholesaler.find({})
        return res
        .status(200)
        .send({
          response: 200,
          message: " All Wholeseller Details",
          status: true,
          Data: for_get_wholeseller,
        });
    } catch (error) {
        
    }
   
}


module.exports = {add_wholeseller , get_wholeseller};

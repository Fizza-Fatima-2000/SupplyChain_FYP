const express = require("express");
const app = express();
const distributor = require('../models/distributor');
const helperfunction = require('../utils/helperfunction');
const stock = require('../models/stock')


//FOR ADD PACKAGE DETAILS
const distributor_details  = async (req, res)=>{
    try {
        const {  Distributor_Name ,Distributor_Address ,Distributor_Phone, Manufacturer_ID,Package_ID } = req.body;
     const add_package = await new distributor({
        Distributor_Name ,
        Distributor_Address ,
        Distributor_Phone, 
        Manufacturer_ID,
        Package_ID
     })
    const for_save_package = await add_package.save();
    console.log(for_save_package);
    return res.status(200).send({ response: 200, message: "distributor Details",status: true,Data: for_save_package, });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

// FOR GET PACKAGE DETAILS
 const get_distributor_details = async(req, res)=>{
    try {
        const get_info = await distributor.find({})
        console.log(get_info);
        return res.status(200).send({ response: 200, message: " All distributor Details",status: true,Data:get_info, });
        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
 }





module.exports = {distributor_details , get_distributor_details};


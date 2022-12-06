
const express = require("express");
const user = require("../models/user");

const create_user = async (req, res) => {
  try {
    const for_create_user = await user.create({
      User_Name: req.body.User_Name,
      User_Email: req.body.User_Email,
      User_Address: req.body.User_Address,
      User_PhoneNumber: req.body.User_PhoneNumber,
      User_Password: req.body.User_Password,
      User_CNIC: req.body.User_CNIC,
    });
    console.log(for_create_user);
    return res
      .status(200)
      .send({
        response: 200,
        message: " User_Created",
        status: true,
        Data: create_user,
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};
module.exports = {create_user}
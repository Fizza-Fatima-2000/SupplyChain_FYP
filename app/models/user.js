const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types;
const Schema = mongoose.Schema;

//creating schema of category
const user_schema = new mongoose.Schema({
  User_Name: {
    type: String,
    required: true,
  },
  User_Email: {
    type: String,
  },
  User_Address: {
    type: String,
  },
  User_PhoneNumber: {
    type: String,
  },
  User_Password:{
    type : String
  },
  User_CNIC:{
    type: String
  },
 token : {
    type : String
 }
});

//creating collection
const user = new mongoose.model("user", user_schema);

//export collection
module.exports = user;


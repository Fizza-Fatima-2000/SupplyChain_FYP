const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types;
const Schema = mongoose.Schema;

//creating schema of user
const user_schema = new mongoose.Schema({
     
     First_Name: {
        type: String,
        required: true
    }, 
    Last_Name:{
     type : String ,
     
    },
    Email:{
      type : String
    }, 
    Phone_Number :{
        type : String
    },
    Password :{
        type : String
    },
    User_CNIC :{
        type : String
    }
}


)

//creating collection
const user = new mongoose.model('user', user_schema)


//export collection
module.exports =  user ;
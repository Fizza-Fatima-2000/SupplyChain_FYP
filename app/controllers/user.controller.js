// const express = require('express');
// const user = require('../models/user')


// /////''''''''''''''''''''''for create user'''''''''''''''''''''''''''//////
// const for_create_user = async(req,res)=>{
//     try {
//         const {First_Name , Last_Name , Email , Phone_Number ,User_CNIC} = req.body
//         const Password = req.body;
//         var encryptedPassword = await bcrypt.hash(Password, 10);
//         const for_user = await user.create({
//             First_Name,
//             Last_Name ,
//             Email,
//             Phone_Number,
//             Password  :encryptedPassword ,
//             User_CNIC
//         })
//         return res.status(200).send({ response: 200, message: " User Create",status: true,Data: for_user, });      
//     } catch (error) {
//         console.log(error);
//         return res.send(error)
//     }
 
// }

// module.export= {for_create_user};
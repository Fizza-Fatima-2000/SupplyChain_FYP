
const express = require("express");

const bcrypt = require('bcryptjs');
const user = require("../models/user");
const jwt = require('jsonwebtoken');

const create_user = async (req, res) => {
  try {
 //  const Password = req.body;
  
    const for_create_user = await user.create({
      User_Name: req.body.User_Name,
      User_Email: req.body.User_Email,
      User_Address: req.body.User_Address,
      User_PhoneNumber: req.body.User_PhoneNumber,
      User_Password:req.body.User_Password,
      User_CNIC: req.body.User_CNIC,
          
    });
    var encryptedPassword = await bcrypt.hash(for_create_user.User_Password, 10);
    for_create_user.User_Password = encryptedPassword;
    
    let for_save_user = await for_create_user.save();
    console.log(for_save_user);
      
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

const for_get_list_of_user = async(req,res)=>{
  try {
    const for_list = await user.find({

    })
    console.log(for_list);
    return res.status(200).send({response :200 , message : "User List with Users Details" , data :for_list})
  } catch (error) {
    console.log(error);
    return res.status(400).send({response : 400 , message :"Error " , status : true , data: null})
  }

  
}

 
const user_login = async (req,res)=>{
  const  for_login = await user.find({
    
  })
}


// const for_user_login = async (req,res)=>{
//   const user_login = await user.find({
    //
    

  //   try {
  //     const { Manufacturer_Phone,Manufacturer_Email,Password } = req.body;

  //     if (!(Manufacturer_Email || Manufacturer_Phone && Password)) {
  //         return res.status(400).send("All input is required");
  //     }

  //     const user = await manufacturer.findOne({ $or: [{Manufacturer_Email:Manufacturer_Email }, { Manufacturer_Phone: Manufacturer_Phone }] });

  //     console.log(user);
  //     if (user && (await bcrypt.compare(Password, user.Password))) {
  //         console.log("sign in");

  //         console.log(user.role)
  //         if (user.role===("62f2ac3426227ebac19a3a1b"))  {
  //           const token = jwt.sign(
  //             { _id: user._id, Manufacturer_Email:user.Manufacturer_Email, Manufacturer_Phone: user.phoneno },
  //             process.env.TOKEN_KEY, {
  //               expiresIn: "1d",
  //           }
              
  //         );
  //         var tokens = token;
  //         return res.status(200).send({ response: 200 , message: "Login Successfully", status: true , Data : user.Manufacturer_Name , token})
  //         // user
  //       }
  //       else{
  //        return res.status(200).send({ response: 406 , message: "Can't Login, Only Admin access", status: false })

  //        // return Function(406,"Can't Login, Only Admin access",false,null,res)
  //       }

          
         

  //     }
  //     else{
  //       return res.status(400).send("Invalid Credentials");
  //     }
  // } catch (err) {
  //     console.log(err);
  // }

    //
//   })
// }


//  socket.on("chat", function (data) {
//     io.socket.emit("chat", data);
//     console.log("hello");
//   });
module.exports = {create_user , for_get_list_of_user}
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const { userModel } = require("../model/usermodel");
const { genarateToken } = require("../config/genarateToken");
const path = require('path')


exports.userRegister = asyncHandler(async (req, res) => {
  const { role,name, email, password ,image} = req.body;

  const useExist = await userModel.findOne({ email });
  if (useExist) {
    res.status(400);
    res.json({ msg: "already exists the user" });
    throw new Error("Already Exists");
  }

  // const ExPath = path.join(__dirname,pic)

  const newUser = await userModel.create({role, name, email, password,image});
  if (newUser) {
    res.status(200).json({ msg: "success", token: genarateToken(newUser._id) });
  } else {
    res.status(400).json({ msg: "error" });
  }
});

exports.getUpdateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ msg: "Task not found" });
  }
  try {
    const userData = await userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      }
    );
    res.status(200).json({msg:"updated"});
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};


// exports.loginUser = asyncHandler(async (req, res) => {
//   const { email, password,role} = req.body;

//   const user = await userModel.findOne({ email });
//   const userPass= await userModel.findOne({password});
//   if(!user){
//     res.status(400).json({msg:"Invalid user"});
//     throw new Error("Invalid user");
//   }
//   if(user.role!==role){
//     res.status(400).json({msg:"Invalid role"});
//     throw new Error("Invalid user");
//   }
//   if(user && userPass){
//     return res.status(200).json({msg:"success"});
//   }else{
//     return res.status(400).json({msg:"invalid username or password"});
//   }

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  const user = await userModel.findOne({ email });
  const userPass= await userModel.findOne({password});
  
  if (!user) {
    res.status(400).json({ msg: "Invalid user" });
    throw new Error("Invalid user");
  }

  
  // Check if the user's role matches the role provided in the request
  if (user.role !== role) {
    res.status(400).json({ msg: "Invalid role" });
    throw new Error("Invalid role");
  }

  // Check if the password provided matches the user's password
  if(user && userPass){
        return res.status(200).json({msg:"success",userData:user});
      }else{
        return res.status(400).json({msg:"invalid username or password"});
      }
});



//   if (user && (await user.matchPassword(password))) {
//     res.json({ msg: "matched", token: genarateToken(user._id) });
//   } else {
//     res.status(400).json({ msg: "invalid user" });
//     throw new Error("Invalid User");
//   }
// });

exports.getbysingle=async (req,res)=>{
  const {id}=req.params;
  try{
    const userData=await userModel.findById(id);
    res.status(200).json(userData)
  }catch(e){
    res.status(400).json({msg:e.message});
  }
}


exports.logout=(req,res,next)=>{
  res.clearCookie('token')
  res.status(200).json({
    success:"true",
    message:"logged out"
  })
}
exports.getUser=async(req,res)=>{
  const userData=await userModel.find({});
  res.json(userData)
}
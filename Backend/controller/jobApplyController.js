const mongoose = require("mongoose");
const { applyModel } = require("../model/jobApplyModel");

exports.getApply = async (req, res) => {
    const applyData = await applyModel.find({});
    res.json(applyData);
  };
  
  // Get a Single Data
  exports.getSingleApply = async (req, res) => {
    const { id } = req.params;
  
    try {
      const applyData = await applyModel.findById(id);
      res.status(200).json(applyData);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };
  
  // Post the data
  exports.postApply = async (req, res) => {
    console.log("post function inside");
  
    const { fname, lname,dob,address,phoneno,qualification,percentage,gender,file,status } = req.body;
  
    try {
      const val = await applyModel.create({ fname, lname,dob,address,phoneno,qualification,percentage,gender,file,status });
      res.status(200).json({msg:"success"});
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };
  
  // Update the Data
  exports.getUpdateApply = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ msg: "Task not found" });
    }
    try {
      const applyData = await applyModel.findByIdAndUpdate(
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
  
  
  // Delete the Data
  exports.getDeleteApply = async(req,res) => {
      const {id} = req.params
      if(!mongoose.Types.ObjectId.isValid(id)){
          return res.status(400).json({"msg":"Task not Found"})
      }
  
      try{
          const applyData = await applyModel.findByIdAndDelete(id)
          res.status(200).json({msg:"deleted"})
      }
      catch(e){
          res.status(400).json({"msg":e.message})
      }
  }
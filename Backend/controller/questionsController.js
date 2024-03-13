const mongoose = require("mongoose");
const questionModel = require("../model/questions");

exports.getQuestion = async (req, res) => {
    const questData = await questionModel.find({});
    res.json(questData);
  };

  exports.postQuestion = async (req, res) => {
    console.log("post function inside");
  
    const { question} = req.body;
  
    try {
      const val = await questionModel.create({question });
      res.status(200).json({msg:"success"});
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };
  
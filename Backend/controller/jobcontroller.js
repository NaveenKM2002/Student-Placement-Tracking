const mongoose=require('mongoose')
const { jobModel } = require('../model/jobModel')


exports.getjob=async(req,res)=>{
    const jobData=await jobModel.find({});
    res.json(jobData)
}

exports.getSinglejob = async (req, res) => {
  const { id } = req.params;

  try {
    const jobData = await jobModel.findById(id);
    res.status(200).json({msg:"success"});
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};


exports.postJob=async (req,res)=>{
    const {companyname,role,salary,qualification,address}=req.body;
    try{
        const val=await jobModel.create({companyname,role,salary,qualification,address});
        res.status(200).json({msg:"success"});
    }catch(e){
        res.status(400),json({msg:"failed"})
    }
}

exports.updateJob=async (req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ msg: "Tasknot found" });
      }
      try {
        const empData = await jobModel.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            ...req.body,
          }
        );
        res.status(200).json({msg:"success"});
      } catch (e) {
        res.status(400).json({ msg: e.message });
      }

}

exports.deleteJob = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({"msg":"Task not Found"})
    }

    try{
        const jobData = await jobModel.findByIdAndDelete(id)
        res.status(200).json({msg:"deleted"})
    }
    catch(e){
        res.status(400).json({"msg":e.message})
    }
}

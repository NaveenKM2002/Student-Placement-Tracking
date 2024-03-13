const mongoose=require('mongoose')

const jobSchema=mongoose.Schema({
    companyname:String,
    role:String,
    salary:String,
    qualification:String,
    address:String

},{
    timestamps:true
})

const jobModel=mongoose.model("jobcollection",jobSchema)

module.exports={jobModel};
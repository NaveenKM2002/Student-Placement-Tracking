const mongoose=require("mongoose")

const applySchema=mongoose.Schema(
    {
        fname:{
            type:String,
            required:true
        },
        lname:{
            type:String,
            required:true
        },
        dob:{
            type:String,
            required:true
        },address:String,
        phoneno:Number,
        qualification:String,
        percentage:String,
        gender:String,
        file:String,
        status:String
    }
)
const applyModel=mongoose.model("application",applySchema);

module.exports={applyModel}


const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()
app.use(cors())

const PORT = process.env.PORT 
const MONGO = process.env.MONGO_URL

mongoose.connect(MONGO)

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
})

const UserModel = mongoose.model('tests',userSchema)


app.get('/',async(req,res)=>{
    // UserModel.find({}).then(users=>{
    //     res.json(users)
    // }).catch(err=>{
    //     res.json(err)
    //     console.log(err);
    // })
    const userData = await UserModel.find({})
    res.json(userData)
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()
app.use(cors())

const PORT = process.env.PORT 
const MONGO = process.env.MONGO_URL

mongoose.connect(MONGO).then(()=>{
    console.log("DB connected Successfully");
}).catch(err=> console.log("error",err))

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
})

const UserModel = mongoose.model('app',userSchema)

app.get('/',async(req,res)=>{
    res.json({
        "name":"siva",
        "age":20
    })
})

app.get('/getUsers',async(req,res)=>{
    const userData = await UserModel.find()
    console.log({userData})
    res.json(userData)
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

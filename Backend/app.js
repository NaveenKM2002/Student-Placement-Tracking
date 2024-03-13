const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

const {databaseConnection} = require('./config/db')
// const emp = require('./routes/emprouter')
const user = require('./routes/userrouter')
const job=require('./routes/jobrouter')
const jobApply=require('./routes/jobApplyrouter')
const quest=require('./routes/questionrouter')

dotenv.config({path:path.join(__dirname,'config','config.env')})
databaseConnection()


app.use(express.json())
app.use(cors())
// app.use('/app/v1/',emp)
app.use('/app/v2/',user)
app.use('/app/v3/',job)
app.use('/app/v4/',jobApply)
app.use('/app/v5/',quest)


app.listen(process.env.PORT,()=>{
    console.log('server is listening on port 7000...');
})
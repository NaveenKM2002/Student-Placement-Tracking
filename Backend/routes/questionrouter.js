const express = require('express')
const router = express.Router()
const {getQuestion,postQuestion}=require('../controller/questionsController')

router.route('/question').get(getQuestion)
router.route('/post/question').post(postQuestion)


module.exports=router
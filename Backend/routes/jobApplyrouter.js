const express = require('express')
const router = express.Router()
const {getApply, getSingleApply, postApply, getUpdateApply, getDeleteApply}=require('../controller/jobApplyController')

router.route('/jobapply').get(getApply)
router.route('/jobapply/:id').get(getSingleApply)
router.route('/jobapply/post').post(postApply)
router.route('/jobapply/:id').patch(getUpdateApply)
router.route('/jobapply/:id').delete(getDeleteApply)

module.exports=router
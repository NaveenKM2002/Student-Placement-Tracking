const express=require('express')
const { getjob, postJob, updateJob, deleteJob, getSinglejob } = require('../controller/jobcontroller')
const router=express.Router()


router.route('/job').get(getjob)
router.route('/job/:id').get(getSinglejob)
router.route('/job/post').post(postJob)
router.route('/job/:id').patch(updateJob)
router.route('/job/:id').delete(deleteJob)



module.exports=router
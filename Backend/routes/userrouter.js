const express = require('express')
const { userRegister, loginUser, logout, getUser,  getbysingle, getUpdateUser } = require('../controller/usercontroller')
const router = express.Router()

router.route('/reg').post(userRegister)
router.route('/reg/get').get(getUser)
router.route('/reg/:id').get(getbysingle)
router.route('/login').post(loginUser)
router.route('/reg/:id').patch(getUpdateUser)
// router.route('/logout').get(logout)

module.exports = router
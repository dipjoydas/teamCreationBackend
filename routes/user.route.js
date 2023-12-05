const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())
const {getUsers,getfilteredUser,addUser,deleteUser,getUserByName,getUserById,updateUser} =require('../controller/user.controller')
router.get('/',getUsers)
router.post('/getfiltereduser',getfilteredUser)
router.get('/getbyname',getUserByName)
router.get('/:id',getUserById)
router.post('/',addUser)
router.delete('/:id',deleteUser)
router.put('/:id',updateUser)


module.exports = router 


const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())
const {getUsers,getfilteredUser,addUser,deleteUser,getUserByName,getUserById,updateUser} =require('../controller/user.controller')
router.get('/',getUsers)
router.post('/getfiltereduser',cors(),getfilteredUser)
router.get('/getbyname',cors(),getUserByName)
router.get('/:id',cors(),getUserById)
router.post('/',cors(),addUser)
router.delete('/:id',cors(),deleteUser)
router.put('/:id',cors(),updateUser)


module.exports = router 


const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())
const {addTeam,getTeams} =require('../controller/team.controller')
router.get('/',getTeams)
router.post('/',addTeam)
module.exports =router 

const express = require('express')
const router = express.Router()
const cors = require('cors')
router.use(cors())
const {addTeam,getTeams} =require('../controller/team.controller')
router.get('/',cors(), getTeams)
router.post('/',cors(),addTeam)
module.exports =router 

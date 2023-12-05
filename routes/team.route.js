const express = require('express')
const router = express.Router()
const {addTeam,getTeams} =require('../controller/team.controller')
const bodyParser = require('body-parser')
const cors = require('cors')
router.use(cors())
router.use(express.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/',cors(), getTeams)
router.post('/',cors(),addTeam)
module.exports =router 

const express = require('express')
const cors =require('cors')
require('../db/mongoose')
const userRoute =require('../routes/user.route')
const teamRouter =require('../routes/team.route')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
const port =process.env.PORT || 5000
app.get('/',(req,res)=>{
    res.send('works')
})
app.use('/api/users',userRoute)
app.use('/api/teams',teamRouter)
app.listen(port,()=>{
    console.log(`listenign on port ${port}`)
})
const mongoose = require('mongoose')
// const validator = require('validator')

const { Schema } = mongoose
const teamSchema = new Schema({
    teamName:String,
    teams:[
        {
            first_name: {
                type: String,
                required: true,
                trim: true
            },
            last_name: {
                type: String,
                required: true,
                trim: true
            },
            email: {
                type: String,
                required: true,
                trim: true,
                
        
            },
            gender:String,
            avatar:String,
            domain:String,
            available:{
                type:String,
                default:'true'
            }
        }
    ]
   
})
const Team =mongoose.model('Team',teamSchema)
module.exports =Team
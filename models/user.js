const mongoose = require('mongoose')
// const validator = require('validator')

const { Schema } = mongoose
const userSchema = new Schema({
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
})
const User =mongoose.model('User',userSchema)
User.collection.createIndex({first_name:'text'},(err)=>{
    if (err) {
        console.error('Error creating index:', err);
      } else {
        console.log('Index created on the title field.');
      }
})
module.exports =User
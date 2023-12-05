const User =require('../models/user')
const mongoose = require('mongoose')
const getUsers =async (req,res)=>{
    const show = req.query.show
    const skip = req.query.skip
    
 const count = await User.countDocuments({})
 
const user = await User.find({}).skip(skip*show).limit(show)

res.send({user,count})
}
const getfilteredUser =async (req,res)=>{
    console.log('hit')

    const domain =req.query.domain 
    const show = req.query.show
    const skip = req.query.skip
    const {gender,available}=req.body
    const filerQuery ={
        
    }
    if(domain.length!=0){
       filerQuery.domain =new RegExp(domain,'i')
    }
    if(gender.length!=0){
        filerQuery.gender ={ $in: gender }
    }
    if(available.length!=0){
     
        const regexPatterns =available.map(value=>(value =='true')? true:false)
        filerQuery.available ={ $in: regexPatterns }
    }
   
  
    try{
       
        const count = await User.countDocuments(filerQuery)
        const user = await User.find(filerQuery).skip(skip*show).limit(show)
        console.log(user,'user')
        res.send({user,count})

    }catch(e){
        console.log(e.message)

    }

}
const getUserByName =async(req,res)=>{

    const searchValue = req.query.search
    const show = req.query.show
    const skip = req.query.skip
    const count = await User.countDocuments({ $text:{$search: searchValue}})
    const user = await User.find({ $text:{$search: searchValue}}).skip(skip*show).limit(show)
    res.send({user,count})
  }
const getUserById =async (req,res)=>{
    const id = req.params.id
    
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
    }
    const user =await User.findById(id)
    res.send(user)
}
const addUser =async (req,res)=>{

   try{
    const user =new User(req.body)
    await user.save()
    res.send({result:'success'})
   
    

   }catch(e){
    res.send({result:'failed'})

   }

}
const deleteUser = async (req,res)=>{
    const id = req.params.id
   

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: 'Invalid ObjectId' });
    }
   const ress =await User.findByIdAndDelete(id)
   res.send({result:'success'})
    
}
const updateUser =async(req,res)=>{
    try{
        const user =await User.findByIdAndUpdate(req.params.id,req.body,{ new: true })
        res.send({result:'success'})

    }catch(e){
        res.send({result:'failed'})

    }
   
    
}
module.exports ={getUsers,getfilteredUser,addUser,deleteUser,getUserById,getUserByName,updateUser}
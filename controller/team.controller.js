const Team =require('../models/team')
const User =require('../models/user')
const addTeam =async(req,res)=>{
    const {teamName,teams} =req.body
    try{
        teams.map(async(team,index)=>{
            const user =await User.findByIdAndUpdate(team._id,{available:'false'},{new:true})
        })
        const result = new Team(req.body)
        await result.save()
      
         res.send({result:'success'})

    }catch(e){
        console.log(e)

    }

}
const getTeams =async(req,res)=>{
    const result =await Team.find({})
    res.send(result)
}
module.exports ={addTeam,getTeams}

const mongoose=require('mongoose')

const UsersSchema=new mongoose.Schema({
    id:Number,
    username:String,
    password:String,

})

const UsersModel=mongoose.model("users",UsersSchema)
module.exports=UsersModel
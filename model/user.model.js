const mongoose = require("mongoose");
const UsserSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    pass:{type:String,required:true},
    role:{type:String,enum:["User","Moderator"],default:"User"}
});
const User=mongoose.model("clints",UsserSchema);

module.exports={
    User
}
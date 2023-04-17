const mongoose = require("mongoose");
const blogSchema=mongoose.Schema({
   blog:{type:String,required:true}
    
});
const post=mongoose.model("blogs",blogSchema);

module.exports={
    post
}
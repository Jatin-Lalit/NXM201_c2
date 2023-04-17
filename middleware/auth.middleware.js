const jwt=require("jsonwebtoken");
const {blacklist} = require("../blacklist.js");
const auth=async (req,res,next)=>{
const token=req.headers.authorization
try{
    if(blacklist.includes(token)){
  res.send("Unauthorized")
    }
   else { if(token){
        const decoded= jwt.verify(token,"masai")
        if(decoded){
            const {UserId}=decoded;
        const user = await UserModel.findOne({_id:UserId})
        const role=user?.role;
        req.role=role;
        req.body.userID=decoded.UserId
         next();
        }else{
         res.send("please login first")
        }
     }else{
         res.send("No Token Found")
     }
    }
}catch(err){
console.log(err)
}

}
module.exports={
    auth 
}
const express =require("express");
const {connect}=require("./db.js")
const {userrouter}=require("./routers/clint.router.js")
const {postrouter}=require("./routers/blog.routers.js")

const {auth}=require("./middleware/auth.middleware.js")
const app=express();



app.use("/blogging",userrouter)
app.use(auth)
app.use("/write",postrouter)
app.listen(6989,async()=>{

try{
    await connect
    console.log("connected to the MongoDB")
}catch(err){
    console.log(err)
}
    console.log("Server is on rocks");
})
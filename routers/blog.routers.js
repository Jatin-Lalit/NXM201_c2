const express=require("express");
const {User}=require("../model/user.model");
const jwt=require("jsonwebtoken");
const { blacklist } = require("../blacklist");
const {verify}=require("../middleware/verify")
const {post}=require("../model/blogs.model")
const bcrypt=require=("bcrypt");

const postrouter=express.Router();


postrouter.get("/",async(req,res)=>{
    try{
    const blogs=await post.find()
    res.send(blogs);
    
    }catch(err){
        console.log(err)
    }
    })
//////////
postrouter.post("/add",async (req,res)=>{
    try{
        const blog=new post(req.body);
        await  blog.save();
        res.send("blog have been added")
    }catch(err){
        console.log(err);
    }
    })


    postrouter.delete("/delete/:id",async(req,res)=>{
      
        const id=req.params.id;
        const blog=await post.findOne({_id:id})
        const uID=blog.UserId;
        const uID_req=req.body.UserId;
        try{
            if(uID!=uID_req){
                res.send("can not delete this one")
            }else{
                await post.findByIdAndDelete({_id:id});
                res.send("deleted")
            }
        }catch(err){
            console.log(err)
        }
    })


    postrouter.patch("/update/:id",async(req,res)=>{
        const paylode=req.body;
        const id=req.params.id;
        const blog=await post.findOne({_id:id})
        const uID=blog.UserId;
        const uID_req=req.body.UserId;
        try{
            if(uTD!=uID_req){
                res.send("not authorized")
            }else{
                await post.findByIdAndUpdate({_id:id},paylode);
                res.send("updated")
            }

        }catch(err){
            console.log(err)
        }
    })
    /////////////////

    postrouter.delete("/delete/:id",verify(["Moderator"]), async(req,res)=>{
        const role=req.role;
        console.log(role);
        if(role==="Moderator"){
            const id=req.params.id;
            try{
                const blog= post.findByIdAndDelete({_id:id});
                res.send("deleted successfuly")
            }catch(err){
                res.send("Error wile deleting data")
            }
        }
       
    })

module.exports={
    postrouter
}
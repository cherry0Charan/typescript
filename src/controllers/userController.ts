import bcrypt from "bcrypt"

import jwt from "jsonwebtoken"

import {Request,Response,NextFunction} from "express"

import Users from "../models/users"

import mail from "../middleware/mail"

require("dotenv").config()

class UserApicalls{
    addUser=async(req:Request,res:Response,next:NextFunction)=>{
        const getUser=await Users.findOne({mail:req.body.mail})
    
        if(getUser){
            res.send("user Already Existed").status(404)
        }else{
            const {password}=req.body
            const hashedPassword=await bcrypt.hash(password,10)
            const info={
                name:req.body.name,
                mail:req.body.mail,
                password:hashedPassword
            }
        
            try{
                mail(req.body.mail,"user created")
                const user=new Users(info)
                const savedUser=await user.save()
                res.send(`user created ${savedUser}`).status(200)
            }catch(err){
                res.send(err)
            }
        }
    }

    login=async(req:Request,res:Response,next:NextFunction)=>{
        const getUser=await Users.findOne({mail:req.body.mail})
    
        if (getUser===null){
            res.send("mail is incorrect").status(400)
        }else{
            const isPasswordMatched=await bcrypt.compare(req.body.password,getUser.password)
    
            if (isPasswordMatched){
                const payload={mail:req.body.mail}
                const jwtToken=jwt.sign(payload,"kljfbbvafgvthbbjhfs")
                res.send({jwtToken}).status(200)
            }else{
                res.send("password is not valid").status(400)
            }
        }
    }

    getAllusers=async(req:Request,res:Response,next:NextFunction) =>{

        interface Cond {
            name:any,
            mail:any,
            password:any
        }

        let condition = <Cond>{};

        const {name,mail,password}=req.query

        if(name!==undefined){
            condition.name=name

        }
        if(mail!==undefined){
            condition.mail=mail
        }
        if(password!==undefined){
            condition.password=password
        }
        console.log(condition)
        try{
            const result=await Users.findOne(condition)
            res.send(result).status(200)
            console.log(result)
        }catch(err){
            res.send(err).status(400)
        }
        
    }
    

}


export default new UserApicalls
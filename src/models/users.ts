import mongoose from "mongoose"
import {Document,Schema} from "mongoose"
//import connect from "../server"

export interface Iuser{
    name:string,
    mail:String,
    password:string
}

export interface IuserSchema extends Iuser,Document{

}

const userSchema:Schema=new Schema({
    name:{
        
    },
    mail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.model<IuserSchema>("User",userSchema)
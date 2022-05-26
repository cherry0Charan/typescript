import mongoose from "mongoose";
import Book from "./books"

import { Schema,Document } from "mongoose";

export interface IAuthor{
    name:String,
    books:string[]
}

export interface IauthorSchema extends IAuthor,Document{

}

const authorSchema:Schema=new Schema({
    name:{
        type:String,
        required:true
    },
    books:[{
        type:mongoose.Types.ObjectId,
        ref: Book
    }]
})

export default mongoose.model<IauthorSchema>("Author",authorSchema)
import { string } from "joi";
import mongoose from "mongoose";

import { Schema,Document } from "mongoose";

export interface Ibooks{
    name:String,
    description:String,
    rating:Number,
    authorName:String
}

export interface IbooksSchema extends Ibooks,Document{

}

const booksSchema:Schema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    rating:{
        type:Number
    },
    authorName:{
        type:String
    }
})

export default mongoose.model<IbooksSchema>("Book",booksSchema)
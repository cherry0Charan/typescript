import Author from "../models/author"
import Book from "../models/books"


import {Request,Response,NextFunction} from "express"


class joinApiCalls{

//using populate

    getAuthorsWithBooks=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            //const authors=await Author.find().populate("books")
            const authors=await Author.aggregate([{$match:{name:"శ్రీ శ్రీ"}}])
            //const results=await Book.find().populate(authors,{path:"name"})
            res.send(authors).status(200)
        }catch(err){
            res.send(err).status(400)  
        }
    } 
//using lookup

    getAuthorsUsingLookup=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const authors=await Author.aggregate([{$lookup:{from:"books",localField:"name",foreignField:"authorName",as :"charan"}}])
            res.send(authors).status(200)
        }catch(err){
            res.send(err).status(400)
        }
    }

///aggreagates

    authorsAggre=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const authors=await Author.aggregate([{$project:{name:1}}])
            res.send(authors).status(200)
        }catch(err){
            res.send(err).status(400)
        }
    }


}

export default new joinApiCalls
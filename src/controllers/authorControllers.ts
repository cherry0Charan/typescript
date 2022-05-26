import Author from "../models/author"

import {Request,Response,NextFunction} from "express"

class AuthorApicalls{

    addAuthors=async (req:Request,res:Response,next:NextFunction)=>{
        const info={
            name:req.body.name,
            books: req.body.books
        }
        const author= new Author(info)
        const savedAuthor=await author.save()
        res.send(savedAuthor).status(200)
    }

    allAuthors=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const Authors= await Author.find()
            res.send(Authors).status(200)
        }catch(err){
            res.send(err).status(403)
        }
    }


    getAuthor=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const Authors= await Author.findById({_id:req.params.id})
            res.send(Authors).status(200)
        }catch(err){
            res.send(err).status(403)
        }
    }
    
    
    updateAuthor=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const info={
                name:req.body.name,
                books:req.body.books
            }
            const savedAuthor=await Author.findByIdAndUpdate({_id:req.params.id},info)
            res.send(savedAuthor).status(200)
        }catch(err){
            res.send(err).status(403)
        }
    }


    deleteAuthor=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            
            const deleteAuthor=await Author.findByIdAndDelete({_id:req.params.id})
            res.send(deleteAuthor).status(200)
        }catch(err){
            res.send(err).status(403)
        }
    }


}

export default new  AuthorApicalls
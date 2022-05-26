import Book from "../models/books"

import {Request,Response,NextFunction, response} from "express"

class BooksApicalls{

    addBook=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const info={
                name:req.body.name,
                description:req.body.description,
                rating:req.body.rating,
                authorName:req.body.authorName
            }
            const book= new Book(info)
            const savedBook=await book.save()
            res.send(savedBook).status(200)
        }catch(err){
            response.send(err).status(403)
        }
    }

    allBooks=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const books= await Book.find()
            res.send(books).status(200)
        }catch(err){
            res.send(err).status(403)
        }
    }


    getBook=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const books= await Book.findById({_id:req.params.id})
            res.send(books).status(200)
        }catch(err){
            res.send(err).status(403)
        }
    }
    
    
    updateBook=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            const info={
                name:req.body.name,
                description:req.body.description,
                rating:req.body.rating
            }
            const savedBook=await Book.findByIdAndUpdate({_id:req.params.id},info)
            res.send(savedBook).status(200)
        }catch(err){
            response.send(err).status(403)
        }
    }


    deleteBook=async (req:Request,res:Response,next:NextFunction)=>{
        try{
            
            const deleteBook=await Book.findByIdAndDelete({_id:req.params.id})
            res.send(deleteBook).status(200)
        }catch(err){
            response.send(err).status(403)
        }
    }


}

export default new  BooksApicalls
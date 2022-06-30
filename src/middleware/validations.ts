import Joi  from "joi";
import { joiPassword } from "joi-password";
import {Request,Response,NextFunction} from "express"

class Validations{
    //user validation
    createUserValidation=async (req:Request,res:Response,next:NextFunction)=>{
        const schemaValidations=Joi.object({
            name:Joi.string().required(),
            mail:Joi.string().email().min(8).max(30).required().trim(),
            password:joiPassword.string().required().alphanum()
        })

        try{
            await schemaValidations.validateAsync(req.body)
            next()
        }catch(err){
            console.log(err)
            res.send(err)
        }
    }

    ///book create validations

    createBookValidation=async (req:Request,res:Response,next:NextFunction)=>{
        const schemaValidations=Joi.object({
            name:Joi.string().required(),
            description:Joi.string().required(),
            rating:Joi.number().required(),
            authorName:Joi.string().required()
        })
        try{
            await schemaValidations.validateAsync(req.body)
            next()
        }catch(err:any){
            
            res.send(err.message).status(400)
            console.log(err)
        }
    }
    
    //book update validation

    updateBookValidation=async (req:Request,res:Response,next:NextFunction)=>{
        const schemaValidations=Joi.object({
            name:Joi.string().optional(),
            description:Joi.string().optional(),
            rating:Joi.number().optional()
        })
        try{
            await schemaValidations.validateAsync(req.body)
            next()
        }catch(err:any){
            
            res.send(err.message).status(400)
            console.log(err)
        }
    }
    

    //author validations//

    createAuthorValidation=async (req:Request,res:Response,next:NextFunction)=>{
        const schemaValidations=Joi.object({
            name:Joi.string().required(),
            books:Joi.array().required()
        })

        try{
            await schemaValidations.validateAsync(req.body)
            next()
        }catch(err){
            console.log(err)
            res.send(err)
        }
    }


    //update author

    updateAuthorValidation=async (req:Request,res:Response,next:NextFunction)=>{
        const schemaValidations=Joi.object({
            name:Joi.string().required(),
            books:Joi.array().required()
        })

        try{
            await schemaValidations.validateAsync(req.body)
            next()
        }catch(err){
            console.log(err)
            res.send(err)
        }
    }

    
}

export default new Validations
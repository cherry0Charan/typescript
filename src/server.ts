import express from "express";

import  { Request, Response } from "express"
import mongoose from "mongoose"

import router from "./routes/user.routing"

import joinRouter from "./routes/joinRouting"

import Authrouter from "./routes/authorRouting"

import BookRouter from "./routes/booksRouting"

require("dotenv").config()

const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

var connection=mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
.then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("error")
})

app.use("/users",router)
app.use("/authors",Authrouter)
app.use("/books",BookRouter)
app.use("/joins",joinRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server running`)
})


import express from "express"

import validations from "../middleware/validations"

import UserApicalls  from "../controllers/userController"

import verifyJwtToken from "../middleware/jwt"

const router=express.Router()

router.post("/createUser",validations.createUserValidation,UserApicalls.addUser)

router.post("/login",UserApicalls.login)

router.get("/allUsers",verifyJwtToken,UserApicalls.getAllusers)


export default router
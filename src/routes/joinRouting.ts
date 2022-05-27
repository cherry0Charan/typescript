import express, { application } from "express"

import verifyJwtToken from "../middleware/jwt"

import joinApiCalls from "../controllers/poulate"

const router=express.Router()

router.get("/authorspop",verifyJwtToken,joinApiCalls.getAuthorsWithBooks)
router.get("/authorslook",verifyJwtToken,joinApiCalls.getAuthorsUsingLookup)
router.get("/authorsaggre",verifyJwtToken,joinApiCalls.authorsAggre)


export default router
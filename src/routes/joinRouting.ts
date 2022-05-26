import express, { application } from "express"

import AuthorApicalls from "../controllers/authorControllers"

import validations from "../middleware/validations"

import verifyJwtToken from "../middleware/jwt"

import joinApiCalls from "../controllers/poulate"

const router=express.Router()

router.get("/authorspop",joinApiCalls.getAuthorsWithBooks)
router.get("/authorslook",joinApiCalls.getAuthorsUsingLookup)
router.get("/authorsaggre",joinApiCalls.authorsAggre)


export default router
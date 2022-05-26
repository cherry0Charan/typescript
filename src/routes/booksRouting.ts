import express from "express"

import BooksApicalls from "../controllers/bookController"

import validations from "../middleware/validations"

import verifyJwtToken from "../middleware/jwt"

const router=express.Router()

//books//


router.post("/addBook",validations.createBookValidation,BooksApicalls.addBook)
router.get("/allBooks",BooksApicalls.allBooks)


router.get("/:id",BooksApicalls.getBook)
router.put("/:id",validations.updateBookValidation,BooksApicalls.updateBook)
router.delete("/:id",BooksApicalls.deleteBook)


export default router
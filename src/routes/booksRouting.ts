import express from "express"

import BooksApicalls from "../controllers/bookController"

import validations from "../middleware/validations"

import verifyJwtToken from "../middleware/jwt"

const router=express.Router()

//books//


router.post("/addBook",verifyJwtToken,validations.createBookValidation,BooksApicalls.addBook)
router.get("/allBooks",verifyJwtToken,BooksApicalls.allBooks)


router.get("/:id",verifyJwtToken,BooksApicalls.getBook)
router.put("/:id",verifyJwtToken,validations.updateBookValidation,BooksApicalls.updateBook)
router.delete("/:id",verifyJwtToken,BooksApicalls.deleteBook)


export default router
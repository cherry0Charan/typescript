import express from "express"

import AuthorApicalls from "../controllers/authorControllers"

import validations from "../middleware/validations"

import verifyJwtToken from "../middleware/jwt"

const router=express.Router()



//Author//

router.post("/addAuthor",validations.createAuthorValidation,AuthorApicalls.addAuthors)
router.get("/allAuthors",AuthorApicalls.allAuthors)
router.get("/:id",AuthorApicalls.getAuthor)
router.put("/:id",validations.updateAuthorValidation,AuthorApicalls.updateAuthor)
router.delete("/:id",AuthorApicalls.deleteAuthor)



export default router
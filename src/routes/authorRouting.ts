import express from "express"

import AuthorApicalls from "../controllers/authorControllers"

import validations from "../middleware/validations"

import verifyJwtToken from "../middleware/jwt"

const router=express.Router()



//Author//

router.post("/addAuthor",validations.createAuthorValidation,verifyJwtToken,AuthorApicalls.addAuthors)
router.get("/allAuthors",verifyJwtToken,AuthorApicalls.allAuthors)
router.get("/:id",AuthorApicalls.getAuthor)
router.put("/:id",validations.updateAuthorValidation,verifyJwtToken,AuthorApicalls.updateAuthor)
router.delete("/:id",verifyJwtToken,AuthorApicalls.deleteAuthor)



export default router
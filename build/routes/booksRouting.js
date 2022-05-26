"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = __importDefault(require("../controllers/bookController"));
const validations_1 = __importDefault(require("../middleware/validations"));
const router = express_1.default.Router();
//books//
router.post("/addBook", validations_1.default.createBookValidation, bookController_1.default.addBook);
router.get("/allBooks", bookController_1.default.allBooks);
router.get("/:id", bookController_1.default.getBook);
router.put("/:id", validations_1.default.updateBookValidation, bookController_1.default.updateBook);
router.delete("/:id", bookController_1.default.deleteBook);
exports.default = router;

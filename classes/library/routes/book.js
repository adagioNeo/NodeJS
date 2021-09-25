const express = require('express');
const router = express.Router();
const bookController = require("../controller/book");
router.get("/all",bookController.getBooks);
router.post("/",bookController.addBook);
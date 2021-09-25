var express = require('express');
var router = express.Router();
const Author = require('../controller/author')
/* GET users listing. */
router.post('/', Author.addAuthor);

module.exports = router;

const mongoose = require("mongoose");
const BooksSchema = new mongoose.Schema({
    author: {type: String},
    pageCount: {type: Number},
    rating: {type: Number}
})
module.exports = mongoose.model("Books",BooksSchema);
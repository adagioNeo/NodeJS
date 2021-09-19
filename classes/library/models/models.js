const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    author: { type: String },
    book: { type: Number },
    totalBooks: { type: String },
    avg_rating: { type: Boolean }
})

module.exports = mongoose.model("Authors",AuthorSchema);
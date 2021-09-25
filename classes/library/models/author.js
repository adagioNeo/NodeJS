const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema({
    name: { type: String },
    totalBooks: { type: String },
    avg_rating: { type: Boolean }
})
module.exports = mongoose.model("Authors",AuthorSchema);


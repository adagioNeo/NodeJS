const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    category: { type: String },
    availabity: { type: Boolean }
})

module.exports = mongoose.model("Product",ProductSchema);
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {type: String, required:true },
    password: {type: String, required:true },
    mail: {type: String }
});
module.exports = mongoose.model("User", UserSchema);
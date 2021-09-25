const Category = require("../models/category");
exports.addCategory = function(req,res){
    const[genre, name, addedAt] = req.body;
    let obj = new Category({genre, name, addedAt});
    obj.save(function(err){
        if(err){
            res.json({ status: 400, debug_data:err})
        }
        res.json({ status: 200, data:"Saved"})
    })
}
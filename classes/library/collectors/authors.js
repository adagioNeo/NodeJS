const model = require('../models/models');
exports.createAuthor = function(req,res){
    const[name, age, gender] = req.body;
    const prodObj = new model({
        name, age, gender
    });
    prodObj.save(function(err){
        if(err){
            console.log(err)
        }
    })
}
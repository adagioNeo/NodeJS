const model = require('app.model');
exports.addProduct = function(req,res){
    const[name,price,category,availabity] = req.body;
    const prodObj = new model({
        name,price,category,availabity
    });
    prodObj.save(function(err){
        if(err){
            console.log(err)
        }
    })
}
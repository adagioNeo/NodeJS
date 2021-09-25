const author = require('../models/author');
exports.addAuthor = function(req,res){
    const{name,totalBooks,avg_rating} = req.body;
    const prodObj = new author({
        name,totalBooks,avg_rating
    });
    prodObj.save(function(err){
        if(err){
            console.log(err)
        }
    })
}
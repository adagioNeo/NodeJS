const Book = require('../models/book');
exports.addBook = function(req,res){
    const[author,pageCount,rating] = req.body;
    const prodObj = new Book({
        author,pageCount,rating
    });
    prodObj.save(function(err){
        if(err){
            res.json({ status: 400, debug_data:err})
        }
        res.json({ status: 200,data:"Saved the book"})
    })
};

exports.getBooks = function (req, res) {
	Book.find(function (err, data) {
		if (err) {
			res.json({ status: 400, debug_data: err });
		} else {
			res.json({ status: 200, data: data });
		}
	});
};
const mongoose = require('mongoose');
const Users = require('../models/users');
exports.addUser = function(req,res){
    const {username, password, mail} = req.body;
    const user = new Users({
        username, password, mail
    });
    user.save(function(err){
        if(err){
            res.json({status: 400, data_err: "Db: Insert error"});
        }
        res.json({status: 200, data: "Added User"});
    })
};
exports.updateUser = function(req,res){
    const {username, password, mail} = req.body;
    const user = new Users({
        username, password, mail
    });
    user.save(function(err){
        if(err){
            res.json({status: 400, data_err: "Db: Update error"});
        }
        res.json({status: 200, data: "Update User"});
    })
};
exports.fetchUser = function(req,res){
    Users.find(function(req,res){

    });
};
exports.removeUser = function(req,res){
    const {username, password, mail} = req.body;
    const user = Users.deleteOne({
        username, password, mail
    });
    user.save(function(err){
        if(err){
            res.json({status: 400, data_err: "Db: Delete error"});
        }
        res.json({status: 200, data: "Delete User"});
    })
}
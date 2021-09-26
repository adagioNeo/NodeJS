const mongoose = require('mongoose');
const Users = require('../models/users');
const LoginDetails = require("../models/login");
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
    const {username, new_password, new_mail} = req.body;
    Users.findOneAndUpdate(function(err){
        if(err){
            res.json({status: 400, data_err: "Db: Update error NOTE: Username cannot be edited"});
        }
        res.json({status: 200, data: "Update User"});
    })
};
exports.fetchUser = function(req,res){
    let reqObj = req.body;
    Users.findById(reqObj.id,function(reqObj,res){

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
exports.loginUser = function(req,res){
    const {username, password} = req.body;
    Users.find(function(err){
        if
    })
    const user = new LoginDetails({
        username, password
    });
    user.save(function(err){
        if(err){
            res.json({status: 400, data_err: "Db: Session creation error"});
        }
        res.json({status: 200, data: "User logged in successfully"});
    })
}
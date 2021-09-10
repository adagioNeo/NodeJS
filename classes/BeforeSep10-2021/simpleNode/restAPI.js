const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(
    bodyParser.urlencoded({extended:true})
);
let users = [
    {id:1,name:"sample",location:"Bangalore"}
];
app.get("/users",function(req,res){

});
app.post("/users",function(req,res){
    let user = req.body;
    users.push({
        id: users.length,
        name:user.name,
        location:user.location
    })
});
app.delete("/users/:id",function(req,res){

});
app.put("/users/:id",function(req,res){

});
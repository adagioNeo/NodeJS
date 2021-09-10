const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    PORT1=5500;
const app = new express,
    employees = [
        {
            id:"sample",name:"Sample",number:"+91999999999"
        }
    ],
    queryList = [];
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/home.html"));
});
app.get("/employees",function(req,res){
    let body = ``;
    employees.forEach((employee)=>{
        body+= `
        <tr class="table-primary">
            <th scope="row">${employee.id}</th>
            <td>${employee.name}</td>
            <td>${employee.number}</td>
        </tr>`
    })
    res.render(path.join(__dirname,"/employees.html"),{token: body.toString()});
});
app.get("/contact",function(req,res){
    res.sendFile(path.join(__dirname,"/contact.html"));
});
app.get("/contactFormSubmission",function(req,res){
    console.log(req.query)
    res.render(path.join(__dirname,"/contactFormSubmission.html"),{token: req.query.query});
})
app.get("/viewLogin",function(req,res){
    res.sendFile(path.join(__dirname,"/login.html"));
})
app.listen(PORT1);

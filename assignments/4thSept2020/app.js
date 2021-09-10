const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    PORT1=5500;
const app = new express,
    employees = [
        {
            id:"r12UK99",name:"Hari Haran",number:"+91999999999"
        },
        {
            id:"shmk2UK99",name:"Virendra Sharma",number:"+919977899976"
        },
        {
            id:"prdy2UK99",name:"Poorna Reddy",number:"+919667869970"
        },
        {
            id:"hnSk2UK99",name:"Heena Sagar",number:"+919973976976"
        },
        {
            id:"mhsg2UK99",name:"Mahender Sigh",number:"+919876899977"
        },
        {
            id:"pjkl2UK99",name:"Pooja Kohli",number:"+919347899954"
        },
        {
            id:"mnrt2UK99",name:"Mani Ratan",number:"+919978799973"
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
    res.render(path.join(__dirname,"/contactFormSubmission.html"),{token: req.query.query});
})
app.get("/viewLogin",function(req,res){
    res.sendFile(path.join(__dirname,"/login.html"));
})
app.listen(PORT1);

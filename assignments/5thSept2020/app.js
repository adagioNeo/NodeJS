const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    PORT=5500;
const app = new express,
    users = [];
app.use(
        bodyParser.urlencoded({extended:true})
    );
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get("/register",function(req,res){
    res.sendFile(path.join(__dirname,"/register.html"));
});
app.post("/register",function(req,res){
    users.push(req.body);
    showUsers(res);
})
app.get("/showusers",function(req,res){
    showUsers(res);
});
app.listen(PORT);

function showUsers(res){
    let body = ``;
    users.forEach((user)=>{
        body+= `
        <tr class="table-primary">
            <th scope="row">${user.fullname}</th>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.gender}</td>
            <td>${user.city}</td>
        </tr>`
    })
    res.render(path.join(__dirname,"/listUsers.html"),{token: body.toString()});
}
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(
    bodyParser.urlencoded({extended:true})
);
const PORT1 = 5500, PORT=5501;
let todos=[];
app.get("/addTODOForm",function(req,res){
    res.send(`
        <!DOCTYPE html>
        <html>
            <body>
                <h2>Add to TODO's list </h2>
                <form action="/listTODO">
                    <input id="todo" name="todo" type="text" placeholder="Enter your TODO tasks here"></input>
                    <button>+</button>
                </form>
            </body>
        </html>
    `)
});
app.get("/listTODO",function(req,res){
    let todo = req.query.todo;
    todo? todos.push(todo) : "";
    // console.log(todo);
    let bodyStr="";
    todos.forEach((todo)=>{
        bodyStr+=`<li>${todo}</li>`
    })
    res.send(`
        <!DOCTYPE html>
        <html>
            <body>
                <h2>TODO list </h2>
                <ul>${bodyStr}</ul></br>
                <a href="http://localhost:${PORT}/addTODOForm">Click here to add again</a>
            </body>
        </html>
    `)
});
app.listen(PORT1)

let products = [];
app.get("/",function(req,res){
    res.send(`
        <!DOCTYPE html>
        <html>
            <body>
                <h2>Add to TODO's list </h2>
                <form action="/products/">
                    <label>ID : </label>
                    <input name="id" type="text" placeholder="Enter ID"></input>
                    <label>FULL NAME : </label>
                    <input name="name" type="text" placeholder="Enter full name"></input>
                    <label>PRICE : </label>
                    <input name="price" type="number" placeholder="Enter price"></input>
                    <button>ADD</button>
                </form>
            </body>
        </html>
    `)
});
app.get("/products",function(req,res){
    let body = "";
    if(req.query.id &&req.query.name){
        products.push(req.query)
    }
    products.forEach((prod)=>{
        body+=`
            <tr>
                <td>
                    <a href="http://localhost:${PORT}/products/${prod.id}">${prod.id}</a>
                </td>
                <td>${prod.name}</td>
                <td>${prod.price}</td>
            </tr>
        `
    })
    res.send(`
        <!DOCTYPE html>
        <html>
            <body>
                <h2>Products list </h2>
                <table>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    ${body}
                </table>
                <a href="http://localhost:${PORT}">Add new</a>
            </body>
        </html>
    `)
})
app.get("/products/:id",function(req,res){
    let body = "";
    products.forEach((prod)=>{
        // console.log(req.params.id+"----"+prod.id)
        if(prod.id===req.params.id){
            body = prod;
        }
    })
    res.send(`
        <!DOCTYPE html>
        <html>
            <body>
                <h2>Products list </h2>
                <label for="id">ID</label>
                <span id="id">${body.id}</span>
                <label for="name">NAME</label>
                <span id="name">${body.name}</span>
                <label for="price">PRICE</label>
                <span id="price">${body.price}</span>
                <a href="http://localhost:${PORT}/products">See all</a>
            </body>
        </html>
    `)
})
app.listen(PORT);
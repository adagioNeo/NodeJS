const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(
    bodyParser.urlencoded({extended:true})
)

app.get("/",function(request,response){
    response.send(`
    <html>
        <form action="/submit" method="post">
            <input type="text" name="name"></input>
            <input type="number" name="number"></input>
            <button></button>
        </form>
        <p>Home page</p>
    </html>`)
});
app.post("/submit", function(request,response){
    let reqObj = request.body;
    console.log(request)
    response.send(`Got the name ${reqObj.name}`)
})
app.get("/contact",function(request,response){
    response.send(`
    <html>
        <p>This is a contact page</p>
    </html>`)
})
app.listen(4000);
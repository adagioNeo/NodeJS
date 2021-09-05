var express = require("express")

// first question
var app1 = express()
app1.get("/",function(req,res){
    res.send(`
        <!DOCTYPE html>
        <html>
            <form action="/checkIfPrime">
                <input type="number" name="num">Enter Number</input>
                <button>Check If Prime</button>
            </form>
        </html>
    `)
});
app1.get("/checkIfPrime",function(req,res){
    let reqObj = req.query, 
        isPrime = true, 
        resStr = "";
    for(let i=2;i<reqObj.num;i++){
        if(reqObj.num%i===0){
            isPrime=false;
            break;
        }
    }
    isPrime ? resStr = "" : resStr = " not";
    res.send(`
        <!DOCTYPE html>
        <html>
            <div>
                ${reqObj.num+" is"+resStr+" a Prime Number"}
            </div>
        </html>
    `);
});
app1.listen(4000);
console.log("Server initiated at port 4000");

// Second question
var app = express();
app.get("/",function(req,res){
    res.send(`
        <!DOCTYPE html>
        <html>
            <form action="/feedback">
                <button>Fill Feedback form</button>
            </form>
        </html>
    `)
});
app.get("/feedback",function(req,res){
    res.send(`
        <!DOCTYPE html>
        <html>
            <form action="/result">
                <div>
                    Full Name: </br><input type="text" name="fullname"></input>
                </div></br>
                <div>
                    Contact Number: </br><input type="number" name="num" placeholder="Include country code without +"></input>
                </div></br>
                <div>
                    <label for="fb">Enter your Feedback:</label></br>
                    <textarea id="fb" name="feedback" rows="4" cols="50">
                    </textarea>
                </div>
                <button>Submit Feedback</button>
            </form>
        </html>
    `)
});
app.get("/result",function(req,res){
    let reqObj = req.query;
    res.send(`
        <!DOCTYPE html>
        <html>
            <div>
                <span>Full name</span>:${reqObj.fullname}
            <div>
            <div>
                <span>Phone number</span>:${reqObj.num}
            <div>
            <div>
                <span>Your Feedback</span>:${reqObj.feedback}
            <div>
        </html>
    `)
});
app.listen(5000);
console.log("Feedback Server initiated at port 5000");
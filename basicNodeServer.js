var http = require("http");
var url = require("url");
let count = 0, userCount=0;
http.createServer(function (request,response){
    // response.writeHead(200,{'Content-Type':'text/html'});
    count++;
    if(request.url !== "/favicon.ico"){
        userCount++;
    }
    response.end(`
        <h1> The User ran ${userCount} times and program ran ${count} times</h1>
        <script>document.write("hello again")</script>                        
    `)
}).listen(4000);
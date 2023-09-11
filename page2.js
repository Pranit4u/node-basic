/*  http server create using http "module"  */

var http = require('http');

function serverFunction(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}

function checkError(error) {
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ 8080)
    else 
        console.log("Error occurred, server can't start", error);
}

http.createServer(serverFunction).listen(8080,checkError);
var http = require('http');
var pg3 = require('./page3');


function serverFunction(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + pg3.getDateAndTime())
    res.end('');
}

function checkError(error) {
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ 8080)
    else 
        console.log("Error occurred, server can't start", error);
}

http.createServer(serverFunction).listen(8080,checkError);
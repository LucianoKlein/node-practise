const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const urlLib = require("url");

http.createServer(function (req, res) {
    let obj = urlLib.parse(req.url, true);
    let url = obj.pathname;
    let GET = obj.query; 

    console.log(url);
    console.log(GET);
    fs.readFile("./www/form.html", function(err, data){
       res.write(data);
       res.end();
    })
}).listen(8080);
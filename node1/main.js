const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const urlLib = require("url");

var server = http.createServer(function (req, res) {
    //GET
    let obj = urlLib.parse(req.url, true);
    let url = obj.pathname;
    const GET = obj.query; 

    //POST
    let str = "";
    req.on("data", function (data) {
        str += data;
    });
    req.on("end", function () {
        const POST = querystring.parse(str);
        console.log(url, GET, POST);
    })
    //文件请求
    let file_name = "./www" + url;
    if (url === "/login") {
        fs.readFile("./www/form2.html", function(err, data) {
           if (err) {
               write("404")
           } else {
               res.write(data);
           }
           res.end();
        });
    }

});
server.listen(8080);
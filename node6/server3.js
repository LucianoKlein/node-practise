const express = require("express");
const staticServer = require("express-static");
const queryString = require("querystring");

let server = express();
server.listen(8080);
server.use("/*.html", staticServer("./www"));

server.use(function(req, resp, next){
    let str = "";
    req.on("data", function(data) {
        str += data;
    })
    req.on("end", function() {
        req.body = queryString.parse(str);
        next();
    });
});

server.use("/", function(req, resp){
    console.log(req.body);
})
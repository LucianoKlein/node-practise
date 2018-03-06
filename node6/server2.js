const express = require("express")
const bodyParser = require("body-parser");

let server = express();
server.listen(8080);

server.use("/", function(req, resp, next){
    console.log("a");
    next();
})

server.use("/", function(req, resp, next){
    console.log("b");
})
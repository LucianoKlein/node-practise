const express = require("express");
const bodyParser = require("body-parser");
const serverStatic = require("express-static");

const server = express();
server.listen(8080);


server.use(bodyParser.urlencoded({extended: true}));

server.use("/login", function(req, res){
    console.log("来了");
    console.log(req.body);
    res.end();
});

server.use(serverStatic("./www"));
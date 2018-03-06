const bodyParser2 = require("./libs/my-body-parser")
const express = require("express");
const staticServer = require("express-static");
let server = express();
server.listen(8080);

server.use("/pages/", staticServer("./www"));
server.use(bodyParser2());

server.use('/', function(req, res) {
    console.log(req.body);
    res.set({status: 200});
    res.end();
})
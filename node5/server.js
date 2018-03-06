const express = require("express");
const fs = require("fs");

let server = express();

let file_name = "./form1.html"

server.get("/", function(req, resp) {
    resp.send("get");
    resp.end();
});

server.post("/", function(req, resp) {
    resp.send("post");
    resp.end();
});

server.use("/login", function(req, resp) {

    fs.readFile(file_name, function(err, data) {
        resp.set("Content-Type", "text/html");
        resp.send(data);
        resp.end();
    })
})
server.listen(8080);

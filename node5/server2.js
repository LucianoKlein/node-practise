const express = require("express");
const expressStatic = require("express-static")
let server = express();
server.listen(8080);

let users = {
    "blue": "123456",
    "zhangsan": "654345",
    "lisi": "987987"
}

server.get("/login", function(req, resp){
    let user = req.query['user'];
    let pass = req.query['pass'];
    if (users[user] === null) {
        resp.send({ob: false, msg: "此用户不存在"});
    } else {
        if (users[user] != pass) {
            resp.send({ok: false, msg: "密码错了"});
        } else {
            resp.send({ok: true, msg: "登录成功"});
        }
    }
    resp.end();
})

server.get("/register", function() {
    
})

server.get("/change_pass", function() {

})
server.use(expressStatic("./www"));
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const urlLib = require("url");

let users = {}; // {"用户名": "123456"}

let server = http.createServer(function (req, res) {
    let str = "";
    req.on("data", function (data) {
        str += data;
    });
    req.on("end", function () {
        let obj = urlLib.parse(req.url, true);
        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);
        if (url === "/user") { //接口
            switch(GET.act) {
                case "reg":
                    //1. 检查插入users
                    if (users[GET.user]) {
                        res.write('{"OK": false, "msg": "此用户已存在"}');
                    } else {
                        users[GET.user] = GET.pass;
                        res.write('{"ok": true, "msg": "注册成功"}');
                    }
                    //2. 插入users
                    break;
                case "log":
                    //1. 检查用户是否存在
                    if (users[GET.user] === null) {
                        res.write('{"ok": false, "msg": "此用户不存在"}');
                    } else if (users[GET.user] !== GET.pass) {
                        res.write('{"ok": false, "msg": "用户名或密码有错误"}');
                    } else {
                        res.write('{"ok": true, "msg": "登录成功"}');
                    }
                    //2. 检查用户密码
                    break;
                dsfault:
                    res.write('{"ok", false, "msg": "未知的act"}')
            } 
            res.end();
        } else { //文件
            //读取文件
            var file_name = "./www" + url;
            fs.readFile(file_name, function (err, data) {
                if (err) {
                    res.write("404");
                } else {
                    res.write(data);
                }
                res.end();
            });
        }
    })
}) 
server.listen(8080);

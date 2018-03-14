const express = require("express");
const static = require("express-static");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const jade = require("jade");
const consolidate = require("consolidate");
const multer = require('multer');
let server = express();

server.listen(8081);

//1. 解析cookie
server.use(cookieParser('asdfljaldsflkjasdflkjasdflk'));

//2. 使用sssion
let arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push('keys_' + Math.random());
}
server.use(cookieSession({name: 'zns_sess_id', keys: arr, maxAge: 20 * 60 * 1000}));
//3. post数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: './www/upload'}).any());
//用户请求
// server.use('/', function(req, res, next) {
//     console.log(req.query, req.body, req.cookies, req.session);
// });

//4. 配置模板引擎
// 输出什么东西
server.set("view engine", "html");
// 模板引擎放在哪里
server.set("views");
// 哪种模板引擎
server.engine('html', consolidate.ejs);

//接受用户请求
server.get("/index", function (req, res) {
    res.render('1.ejs', {name: 'blue'});
});

//4. static数据
server.use(static("./www"));


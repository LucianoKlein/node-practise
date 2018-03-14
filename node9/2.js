const jade = require("jade");

console.log(jade.renderFile("./views/3.jade", {
    pretty: true,
    arr: ["aaa", "sfadf", "qweqwe"],
    content: "<p>你好啊</p>"
}))
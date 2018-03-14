const jade = require("jade");
const fs = require("fs");

let str = jade.renderFile("./view/2.jade", {pretty: true})
console.log(str);
fs.writeFile("./build/2.html", str, function(err) {
    if (err) {
        console.log("写入失败");
    } else {
        console.log("写入成功哦你");
    }
});
const urlLib = require("url");
let obj = urlLib.parse("http://www.baidu.com?aaa=1&bbb=2&ccc=3", true);

console.log(obj);
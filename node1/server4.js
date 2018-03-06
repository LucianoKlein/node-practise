const http = require("http");
const urlLib = require("url");
const fs = require("fs");
const querystring = require("querystring");
http.createServer(function (req, res) {
    //POST- req
    let obj = urlLib.parse(req.url, true);
    let url = obj.path;

    let str = "";
    var i = 0;
    //data--有一段数据到达(很多次)
   req.on("data", function (data){
       console.log(`第${i++}次收到这个数据`)
       str += data;
   }); 
   //end--数据全部到达(一次)
   req.on("end", function() {
       let POST = querystring.parse(str);
   });

   if (url === "/login") {
       fs.readFile("./www/form2.html", function(err, data) {
            res.write(data);
            res.end();
       })
   }
}).listen(8080);
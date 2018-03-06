const http = require("http");

var server = http.createServer(function (req, res){
    console.log("有人来访问了");

    res.write("abc");
    res.end();
});

//监听--等着
server.listen(8989);

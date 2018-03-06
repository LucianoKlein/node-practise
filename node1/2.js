
const http = require("http");

var server = http.createServer(function (req, res){
    console.log("有人来访问了");
    console.log(req.url);
    switch(req.url) {
        case "/1.html":
            res.write("11");
            break;
        case "/2.html":
            res.write("22");
            break;
        default:
            res.write("404");
            break;
    }

    res.end();
});

//监听--等着
server.listen(8989);

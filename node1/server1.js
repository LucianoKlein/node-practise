const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http.createServer(function (req, res) {
    let url = req.url;
    let GET = {};
    if (url.indexOf("?") !== -1) {
        let arr = url.split("?");
        url = arr[0];
        if (arr[1].indexOf("&") !== -1) {
            let arg = arr[1].split("&");
            arg.forEach(ele => {
                let value = ele.split("=");
                GET[value[0]] = value[1] ;
            })
        }

    } else {
        GET = {};
    }
    console.log(url);
    console.log(GET);
    fs.readFile("./www/form.html", function(err, data){
       res.write(data);
       res.end();
    })
}).listen(8080);
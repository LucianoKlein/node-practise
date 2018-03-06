const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

let server = express();

//cookie
;
server.use(cookieParser());
server.use(cookieSession({
    keys: ["aaaa", "bbb", "ccc"],
}));


server.use("/aaa", function (req, resp) {
    if (req.session["count"] === null) {
        req.session["count"] = 0;
    } else {
        req.session["count"]++;
    }
    console.log(req.session["count"]);
    resp.send("ok");
});
server.listen(8080);
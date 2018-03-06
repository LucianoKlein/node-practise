const express = require("express");
const cookieParser = require("cookie-parser");

let server = express();

//cookie
server.use(cookieParser("zlxkazxvadflkj"));



server.use("/aaa", function (req, resp) {
   console.log(req.cookies);
   req.secret = "zlxkazxvadflkj";
   resp.cookie("password", "good", {signed: true});
   resp.clearCookie("password");
   console.log("签名cookie:" , req.signedCookies);
   resp.send("ok");
});
server.listen(8080);
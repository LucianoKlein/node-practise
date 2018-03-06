const querystring = require("querystring");

let json = querystring.parse("user=blue&pass=123456&age=18");

console.log(json)
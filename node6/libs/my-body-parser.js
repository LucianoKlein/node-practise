const queryString = require("querystring");

module.exports = function () {
    return {
        aaa: function(req, resp, next) {
            let str = "";
            req.on("data", function (data) {
                str += data;
            })
            req.on("end", function () {
                req.body = queryString.parse(str);
                next();
            });
        }
    }
};
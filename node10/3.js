const ejs = require('ejs');

ejs.renderFile('./view/3.ejs', {json: {arr: [
    {user: "blue", pass: "123"},
    {user: "xinxin", pass: "456"},
    {user: "red", pass: "789"}
]}}, function(err, data) {
    console.log(data);
})



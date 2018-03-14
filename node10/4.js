const ejs = require('ejs');

ejs.renderFile('./view/4.ejs', {json: {}}, function(err, data) {
    console.log(data);
})



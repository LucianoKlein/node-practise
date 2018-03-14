const ejs = require('ejs');

ejs.renderFile('./view/2.ejs', {}, function(err, data) {
    console.log(data);
})


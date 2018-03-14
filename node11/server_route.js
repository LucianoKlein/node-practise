const express = require('express');

let server = express();

//目录1： /user
let routeUser = express.Router();

routeUser.get('/1.html', function(req, res) {
    res.send('user1');
})

routeUser.get('/2.html', function(req, res) {
    res.send('user2');
})
server.use('/user', routeUser);
//目录2: /article

let articleRouter = express.Router();
server.use('/article', articleRouter);

articleRouter.get('/10001.html', function(req, res){//httml
    res.send("article10001");
})

server.listen(8081);
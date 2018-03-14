const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const pathLib = require('path');
let objMulter = multer({dest: './www/upload'});

let server = express();

server.use(objMulter.any());

server.post("/", function(req, resp) {
    //1. 获取原始的文件扩展名
    //2. 重命名零食文件
    let newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    console.log(newName);
    fs.rename(req.files[0].path, newName, function(err) {
        if (err) {
            resp.send('上传失败');
        } else {
            resp.send('上传成功');
        }
        resp.end();
    })

})

server.listen(8081);

const jade = require("jade");

console.log(jade.renderFile("./views/2.jade", 
    {   pretty: true, 
        a: "blue", 
        b: "red", 
        json: {
            width: "200px", 
            height: "200px", 
            background: "red"
        },
        arr: ["aaa", "left-wrap", "bbb"]
}))
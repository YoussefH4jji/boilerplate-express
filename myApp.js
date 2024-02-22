let express = require('express');
let app = express();
require('dotenv').config()
console.log("Hello World");
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
app.use("/public",express.static(__dirname +'/public'))
app.use(function(req , res, next){
    console.log(`${req.method} / ${req.path} - ${req.ip}`)
    next()
})
app.get("/json", (req,res)=>{
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        res.json({"message":"HELLO JSON"})    
    }else{
        res.json({"message":"Hello json"})
    }
})

app.get('/now', function(req,res,next){
    req.time=newDate().toString();
    next();
},
    (req, res) =>{
        res.send(
            {
                time: req.time
            }
        )
    }
)























 module.exports = app;

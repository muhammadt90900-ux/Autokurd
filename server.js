const express = require("express");
const app = express();
app.use(express.json());

let users = [];

app.post("/register", (req,res)=>{
    users.push(req.body);
    res.send({ok:true});
});

app.post("/login",(req,res)=>{
    const user = users.find(u =>
        u.user === req.body.user && u.pass === req.body.pass
    );

    if(user) res.send({ok:true});
    else res.send({ok:false});
});

app.listen(3000, ()=> console.log("Server running"));

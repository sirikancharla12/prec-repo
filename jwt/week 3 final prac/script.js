const express=require("express");
const app=express();
app.use(express.json());

function datentime (req,res,next){
const time=Date.now();
console.log(`Current time: ${time}`);
next();
}

function customhead(req,res,next){
    res.set("X-Custom-Header","Customheadervalue");
 
    next();
}
function checkquery(req,res,next){
    if("q" in req.query){
        const querychecked=req.query.q;
        res.send("query checked ")
    }else{
        res.send("query noe found")
    }
    next();
}

app.get("/",datentime,customhead,checkquery);


app.listen(3000)
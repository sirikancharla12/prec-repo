
const express=require("express")
const app=express();

const conttype=(req,res,next)=>{
    res.set("Content-Type","application/json")
    next()
}

app.use(conttype)
app.get("/",(req,res)=>{
res.send("hello json")
})

app.listen(3000);
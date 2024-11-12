

const reqip=(req,res,next)=>{
    const userip=req.ip;
    console.log("userip is",userip)
    next()
}
const express=require("express")
const app=express()

app.use(reqip)
app.get("/",(req,res)=>{
    res.send("hello ip")
})


app.listen(3000)
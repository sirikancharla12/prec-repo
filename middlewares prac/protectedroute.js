const express=require("express")
const app=express();

const protectroute=(req,res,next)=>{
    console.log("protected route")
    next();
}

app.use("/protected",protectroute)


app.get("/protected",(req,res,next)=>{
    res.send("protected access")
})

app.get("/",(req,res,next)=>{
    res.send(" not protected access")
})


app.listen(3000)
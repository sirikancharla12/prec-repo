const express=require("express");
const app=express();

app.use((req,res,next)=>{
    const start=Date.now();
    res.on("finish",(req,res)=>{
        const timetaken=Date.now()-start;
        console.log(timetaken);
        next();
    })
})
app.get("/",(req,res)=>{
res.send(timetaken);
})

app.listen(3001);
const express =require("express");
const app=express();
app,use(express.json());
app.get("/health-checkup",(req,res)=>{
const username=req.headers.username;
const password=req.headers.password;
const kidneyid=req.query.kidneyid;

if(!(username==="siri" && password==="pass")){
    res.status(400).json({msg : "u messed up"});
}


if(kidneyid==1 || kidneyid==2){
    res.json({
        msg:"your kidney is fine!"
    })
}
}) 
    





app.listen(3000);
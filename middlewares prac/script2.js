const express =require("express")
const app=express()
let errorcount=0;

app.use(express.json());

app.get("/",(req,res)=>{
    throw new Error("there is an error");
    res.status(200).json({"name" : "siri"});
})

app.post("/",(req,res,next)=>{
   
    throw new Error("there is an posting error");
    
})

app.use((err,req,res,next)=>{
   
    res.status(404).json({error:err.message});
    errorcount=errorcount+1;
    console.log("errorcount",errorcount);
    })

app.listen(3000)
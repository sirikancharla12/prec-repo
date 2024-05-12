const express=require("express");
const fs=require("fs");
const path=require("path");

const filesDir="./files"
const app=express();


app.get("/files",function(req,res){
    fs.readdir(filesDir,"utf-8",(err,files)=>{
        if(err){
            console.log("error",err);
            res.send("sorry");
return
        }
        else{
           res.status(200).json(files);
        
        }
    });
    
// const {filename}=req.params;
// const filepath=path.join(filesDir,filename);
// console.log(filepath);


// fs.readFile(filepath,"utf-8",(err,data)=>{
//     if(err){
//         console.log("file not found");
//         res.status(404).send("not found");
//         return;
//     }else{
//         res.status(200).send(data);
//     }

// });




 
});


app.listen(3000);

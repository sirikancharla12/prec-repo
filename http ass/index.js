const express=require("express");
const fs=require("fs");
const path=require("path");
console.log("here i am");
const filesDir="./files"
const app=express();

app.get("/files/:filename",function(req,res){
console.log("look here")
const {filename}=req.params;
const filepath=path.join(filesDir,filename);
console.log(filepath);


fs.readFile(filepath,"utf-8",(err,files)=>{
    if(err){
        console.log("file not found");
        res.status(404).send("not found");
        return;
    }else{
        res.status(200).send(files.data);
    }

});




 
});


app.listen(3003);
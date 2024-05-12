const express =require("express");
const fs=require("fs");

const path=require("path");
const app=express();
console.log(__dirname);

const statdir=path.join(__dirname,"public");
console.log(statdir);

app.get("/:filename",(req,res)=>{
  let filename=req.params.filename;
  let filepath=path.join(statdir,filename);
  fs.readFile(filepath,"utf-8",(err,data)=>{
    if(err){
      res.status(404).send("file not found");
      return;
    }
res.send(data);
    
  });
});


app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});





// app.get("/",(req,res)=>{
//   fs.readFile(path.join(statdir,"index.html"),"utf-8",(err,data)=>{
//     if (err) {
//       res.status(500).send("Internal Server Error");
//       return;
//     }
//     res.send(data);
//   });
// })
        
//         app.listen(3001);

// fs.readdir(statdir,function(err,files){
//   if(err){
//     console.log("error sorry");
//   }else{
//     console.log(files);
//     files.forEach(function(file){
//       let filepath=path.join(statdir,file);
//       fs.readFile(filepath,"utf-8",function(err,data){
//         if(err){
//           console.log("inside file error");
//         }else{
//           console.log(data)
//         }
//       })
//     })
//   }
// })


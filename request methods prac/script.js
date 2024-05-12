// const express =require("express");
// const fs=require("fs");
// const path=require("path");

// const app=express();

// let filedir=path.join(__dirname,"urfiles");
// console.log(filedir);
//  app.get("/:filename",(req,res)=>{

//    let filename = req.params.filename;
//    let startdir=path.join(filedir,filename);
//    console.log(startdir);
//     fs.readdir(startdir,"utf-8",(err,data)=>{
//       if(err){
//          res.status(500).send(err.message);
//       return;
//    }
//       res.send(data);
//     })
//  });

//  app.listen(3001);

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.text());

let filedir = path.join(__dirname, "urfiles");
console.log("File directory:", filedir);

app.get("/:filename", (req, res) => {
   let filename = req.params.filename;
   let startdir = path.join(filedir, filename);
   console.log("Reading directory:", startdir);
   fs.readFile(startdir, "utf-8", (err, data) => {
     if (err) {
       res.status(500).send(err.message);
       return;
     }
     res.json(data);
   });
 });
 

app.put("/:filename", (req, res) => {
   let filename = req.params.filename;
   let startdir = path.join(filedir, filename);
   const content=req.body;
   console.log("Reading directory:", startdir);
   fs.writeFile(startdir,content, "utf-8", (err, data) => {
     if (err) {
       res.status(500).send(err.message);
       return;
     }
     res.send("u r updated successfully");
   });
 });

// app.post("/:filename", (req, res) => {
//    let filename = req.params.filename;
//    let startdir = path.join(filedir, filename);
//    const content=req.body.content;
//    console.log("Reading directory:", startdir);
//    fs.appendFile(startdir,content, "utf-8", (err, data) => {
//      if (err) {
//        res.status(500).send(err.message);
//        return;
//      }
//    //   res.json(data);
//    });
//  });



// DELETE request to delete a file
app.delete("/:filename", (req, res) => {
   let filename = req.params.filename;
   let startdir= path.join(filedir, filename);
   console.log("Deleting file:",startdir);
   if (!fs.existsSync(startdir)) {
     res.status(404).send("File not found");
     return;
   }
   fs.unlink(startdir, (err) => {
     if (err) {
       res.status(500).send(err.message);
       return;
     }
     res.send("File deleted successfully");
   });
 });
 

app.listen(3003, () => {
  console.log("Server is running on port 3002");
});



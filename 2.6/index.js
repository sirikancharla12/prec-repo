const { error } = require("console");
const fs =require("fs");
const filecontents=fs.readFileSync("./file.txt","utf-8");
console.log(filecontents);
fs.readFile("./file.txt","utf-8",(error,data)=>{
  if(error){
    console.log(error);
  }else{
    console.log(data)
  }
})

fs.writeFileSync("./greet.txt","hello greet , good afternoon!");

fs.writeFile("./greet.txt","hello siri",(err)=>{
  if(error){
    console.log(err);
    
  }else{
    console.log("file written");
  }
})
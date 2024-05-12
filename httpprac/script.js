// const http=require("http");
// const myserver=http.createServer((req,res)=>{
//     console.log("new req rec.");
//     res.end("hello from server");
// });
// myserver.on("error", (err) => {
//     console.error("Server error:", err);
// });
// myserver.listen(3001,()=>{
//     console.log("Server is running on port 3000");
// });

const express=require("express");
const app=express();
//route
app.get('/',function(req,res){
    console.log("u r under a server");
res.end("here u go ur first server!!!")
})



app.listen(5000);
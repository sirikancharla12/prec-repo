// const express=require("express");
// const app=express();

// app.use((req,res,next)=>{
//     console.log("u r doing middlewares!!! yahooooo")
//   next();  
// });

// app.get("/",(req,res)=>{
//     res.send("hello middlewares")
// })

// app.use((req,res,next)=>{
//     console.log(`${Date().toString()} is a ${req.method}`);
//     next();
// })
// app.get("/",(req,res)=>{
// res.send("hello middlewares")
// })

// app.listen(3000);



// const express=require("express");
// const app=express();

// app.use((req,res,next)=>{
//     const start=Date.now();
//     res.on("finish",()=>{
//         const timetaken=Date.now()-start;
//         console.log(timetaken);
        
//     })
//     next();
// })
// app.get("/",(req,res)=>{
// res.send("hello how u doing?");
// })

// app.listen(3000);

// const express=require("express");

// const app=express();

// app.use((req,res,next)=>{
//     res.setHeader("X-Powered-By", "Express");
// console.log(`${req.method} is a ${req.url} request`)
//   next();
// })

// app.get("/practice",(req,res)=>{
//   res.send("hello")
// })
// app.listen(3000);

const express=require("express");

const app=express();

app.use((req,res,next)=>{
 if(!req.query.token){
   return res.status(404).send("token missing");
    
 }
 next();
})

app.get("/practice",(req,res)=>{

  res.send("token is present")
})
app.listen(3000);
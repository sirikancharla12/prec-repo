// const express =require("express");
// const app=express();

// let numberOfRequestsForUser = {};
// setInterval(() => {
//     numberOfRequestsForUser = {};
// }, 1000)

// app.use((req,res,next)=>{
//     const userid=req.headers["user-id"];
//     if(numberOfRequestsForUser[userid]){
//         numberOfRequestsForUser[userid]=numberOfRequestsForUser[userid]+1;
//                 if(numberOfRequestsForUser[userid]>5){
//             res.status(404).send("you r blocked coz of more requests")
//         }
//         next();
//     }
//     numberOfRequestsForUser[userid]=1;
//     next();
// })


// app.get('/user', function(req, res) {
//     res.status(200).json({ name: 'john' });
//   });
  
//   app.post('/user', function(req, res) {
//     res.status(200).json({ msg: 'created dummy user' });
//   });

// app.listen(3000);



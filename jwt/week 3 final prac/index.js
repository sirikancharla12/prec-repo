const express= require("express")
const app=express();
app.use(express.json());


function authenticationmiddleware(req,res,next){
    const apikey=res.set("x-api-key");
    console.log('API Key:', apikey);

    if(!apikey){

return res.json("api not found")
    }
const validkey="valid-api"
if(apikey===validkey){
 
   next()
}
res.status(403).json("invalid api");
}

app.get("/secure",authenticationmiddleware,(req,res)=>{
 res.send("this a secured one")
})

app.get("/public",authenticationmiddleware,(req,res)=>{
    res.send("this a public one")
   })



app.listen (3001);



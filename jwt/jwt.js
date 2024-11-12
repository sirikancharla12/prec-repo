const express=require("express");
const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");
const jwtpassword="12345";

mongoose.connect(
    "mongodb+srv://sirikancharla1290:siri%401290@cluster0.kpnwwuu.mongodb.net/"
  );

  
  
  const User = mongoose.model("User", {
    name: String,
    username: String,
    pasword: String,
  });

  const user=new User({name:"Harkirat Singh", email:"iris@gmail.com",password:"126657"});
  user.save()

const app=express();
app.use(express.json());

const ALLUSERS=[
    {
        username:"siri@gmail.com",
        password:"123",
        name:"siri kancharla"
    },
    {
        username:"dakota@gmail.com",
        password:"daks",
        name:"dakota johnson"
    },
    {
        username:"kylie@gmail.com",
        password:"jenner",
        name:"kylie jenner"
    },
    {
        username:"weeknd@gmail.com",
        password:"after",
        name:"abel"
    }
]

function userexists(username,password){
let userexists=false;
for(let i=0;i<ALLUSERS.length;i++){
    if(ALLUSERS[i].username==username && ALLUSERS[i].password==password){
        userexists=true;

    }
}
return userexists;
}

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
 if(!userexists(username,password)){
    return res.status(403).json({
        msg:"user does not  exist"
    })
 }
 var token=jwt.sign({username:username},jwtpassword);
 return res.json({
    token,
 })
})

app.get("/users",(req,res)=>{
const token=req.headers.authorization;
try{
    const decoded=jwt.verify(token,jwtpassword);
    const username=decoded.username;
    res.json({
        users:ALLUSERS.filter(function(value){
            if(value.username==username){
                return false;
            }
            return true;
        })
    })
}catch{
    res.status(404).json({
        msg:"not matched"
    })
}

})


app.listen(3003)
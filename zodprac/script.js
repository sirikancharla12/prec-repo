const express=require("express")

const zod =require("zod");


  const myschema=zod.object({
    name:zod.string().min(1,"Name is required"),
    age:zod.number().int().min(0,"age should be non-negative")
  })

const validation=(schema)=>
    (req,res,next)=>{
  const objresult=schema.safeParse(req.body);
  if(objresult.success){
    next();
  }console.log("validation error",objresult.error);
  
}
const app=express();
app.use(express.json());
app.post("/user",validation(myschema),(req,res)=>{
res.send("hello zod from middleware")
})




app.listen(3001);
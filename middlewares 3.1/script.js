const express =require("express");
const app=express();
 const zod=require("zod");
app.use(express.json());

const schema=zod.array(zod.number());
const schema =zod.object({
    email:zod.string(),
    password:zod.string(),
    country:z.literal("IN").or(z.literal("US")),
    kidneys:z.array(z.number())
})


app.post("/health-checkup",function(req,res){
const kidneys =req.body.kidneys;
const response=schema.safeParse(kidneys);
res.send({
    response
});
})


// app.use(function(err,req,res,next){
//     res.json({
//         msg:"sorry smthg went wrong"
//     })
// })

app.listen(3001);
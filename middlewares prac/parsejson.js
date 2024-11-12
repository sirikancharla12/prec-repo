

const express=require("express")
const app=express()

app.use(express.json())

const parseasjson=(req,res,next)=>{
    const bodyas=req.body;
    const bodily=JSON.stringify(bodyas);
    console.log(bodily);
    next();
}

app.use(parseasjson)

app.get("/",(req,res)=>{
    res.send("helllo again")
})
app.post("/", (req, res) => {
    res.send("POST request received");
});


app.listen(3000)
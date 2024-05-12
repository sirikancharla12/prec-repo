const express=require("express");
const app=express();


const user=[{
    name:"siri",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json());

app.get('/',function(req,res){
    const johnkidneys=user[0].kidneys;
    const numberOfKidneys=johnkidneys.length;
  let numofhealthy=0;
  for(let i=0;i<johnkidneys.length;i++){
    if(johnkidneys[i].healthy){
        numofhealthy=numofhealthy+1;
    }
  }
  const numofunhealthy=numberOfKidneys-numofhealthy;
  res.json({
    numberOfKidneys,numofhealthy,numofunhealthy
  })
})

app.post('/',function(req,res){
const ishealthy=req.body.ishealthy;
user[0].kidneys.push({
    healthy: ishealthy
})
res.json({
    msg:"Done!"
})

})

app.put('/',function(req,res){
   for(let i=0;i<user[0].kidneys.length;i++){
    user[0].kidneys[i].healthy="true";
   } 
   res.json({});
})

app.delete('/',function(req,res){
    let atleastonebadkidney=false;
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys.length.healthy){
            atleastonebadkidney=true
        }
    }
    return atleastonebadkidney ;

   

    const newkidneys=[];
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:"true"
            })
           
        }
    }
    user[0].kidneys=newkidneys
    res.json({msg:"u r done!"})
 })



app.listen(3000);
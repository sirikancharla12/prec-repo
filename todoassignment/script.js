const express =require("express");
const app=express();

app.use(express.json());
const todo=[
{ title: "Meet a friend",Completed: "false" ,id:1, Description:"I should meet Chinnu and get my doubts cleared"},
{ title: "Go Shopping",Completed: "false" , id:2, Description:"Shop for a dress for friend's wedding"},
{ title: "Cohort",Completed: "false" , id:3, Description:"I should start week 3 of cohort today"},
{ title: "Pickup",Completed: "false" , id:4, Description:"Cousin asked me to pick him up from college"},
{ title: "Water plants",Completed: "false" , id:5, Description:" should water plants n plant mint "},
]   


app.get("/todos",(req,res)=>{
    res.json(todo);
})

app.get("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const foundTodo = todo.find(item => item.id === id);
    if (foundTodo) {
        res.status(200).json(foundTodo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
});

app.post("/todos",(req,res)=>{
const newtodo=req.body;
todo.push(newtodo);
    res.json(newtodo);
})

// { "title": "DIY with dad",
// "Completed": "false" ,
//  "id":6,
//   "Description":" A minicraft with dad"
//   }


app.put("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const changeTodo = todo.find(item => item.id === id);
    if (changeTodo) {
        changeTodo.Completed=req.body.Completed;
        res.status(200).json(changeTodo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
});

app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const changeTodo = todo.find(item => item.id === id);
   
});







app.listen(3000);
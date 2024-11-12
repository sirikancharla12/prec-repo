const jwt =require("jsonwebtoken")



const value={
    name:"harkirat",
    accountno:12345
}

const token =jwt.sign(value,"secret");
console.log(token) ;
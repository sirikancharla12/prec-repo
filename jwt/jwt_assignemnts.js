const express=require("express");
const jwt = require("jsonwebtoken");
const zod=require("zod");


const app=express();
app.use(express.json());
const jwtpassword="secret";

const emailschema=zod.string().email();
const passwordschema=zod.string().min(6);

function signjwt(req, res) {
    const { username, password } = req.body;
    const userres = emailschema.safeParse(username);
    const passres = passwordschema.safeParse(password);
    if (!userres.success || !passres.success) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
  
    const token = jwt.sign({ username }, jwtpassword);
    return res.json({ token });
  }



function verifyjwt(req, res) {
    const { token } = req.body;
    let isValid = true;
    try {
      jwt.verify(token, jwtpassword);
    } catch (e) {
      isValid = false;
    }
    return res.json({ valid: isValid });
  }

function decodejwt(req, res) {
    const { token } = req.body;
    const decodetoken = jwt.decode(token);
    if (decodetoken) {
      return res.json({ decoded: decodetoken });
    }
    return res.status(400).json({ error: "Invalid token" });
  }

app.post("/sign",signjwt)


app.post("/verify",verifyjwt)


app.post("/decode",decodejwt)


app.listen(2000);

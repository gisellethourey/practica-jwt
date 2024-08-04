import {model} from "../models/userModel.js"
import jwt from "jsonwebtoken"
import 'dotenv/config.js';

const {JWT_SECRET}= process.env;

 const home= (req, res) => {
    res.send('Home World desde Router');
};

const notFound =( req, res) => {
    res.send('404-- page not found')
}

const register = async (req, res)=> {
    const {name, email, password}= req.body
    const result = await model.addUser({name, email,password})
    res.send('User created')
}

const login = async (req,res) => {
    try {
const {email, password}= req.body
//verificamos si user existe
const user= await model.getUser(email)
if(!user) {
  res.status(401).send('User not found')  
}else{
//generar token
const token = jwt.sign(
    {
        email
    },
    JWT_SECRET
)

res.status(200).send({token})
}
} catch(error) {
    res.status(500).send(error)
}
};

const profile= async (req,res) => {
   let token = req.headers.authorization;
   token = token.split(" ")[1];
   console.log(token)

   if(!token) {
    return res.status(403).send("A token is required por authentication")
   }
   try {
    const decoded= jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user= await model.getUser(decoded.email);
    if (user) {
        return res.send(user);
    } else{
        return res.status(401).send("Invalid Token");
    }
   } catch(err){

    return res.status(401).send("Invalid token");
   }
}


export const controller ={
home, notFound, register, login, profile
}



import {model} from "../models/userModel.js"

const home = ( req,res) =>{
    res.send('Home World desde Router')
}

const notFound =( req, res) => {
    res.send('404-- page not found')
}

const register = async (req, res)=> {
    const {name, email, password}= req.body
    const result = await model.addUser({name, email,password})
    res.send('User created')
}

export const controller ={
home, notFound, register
}


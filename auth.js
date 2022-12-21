require("dotenv").config();
const jwt = require("jsonwebtoken"),
SECRET = process.env.SECRET,
userController = require("./user/userController"),
{createToken} = require("./user/userLogic");

const auth = async (req , res, next)=>{
    // const token = req.headers.authorization
    const id = jwt.verify(token,SECRET) 
    const user = await userController.read({_id : id})
    if (!user.length)throw{status: 400 , message: "no user = no authorization"}
    const token = await createToken(id)
    res.send(token)
    next()
}

module.exports = {auth} 
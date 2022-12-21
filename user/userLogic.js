require("dotenv").config()
const userController = require("./userController"),
    jwt = require("jsonwebtoken"),
    SECRET = process.env.SECRET;

const register = async (userData) => {
    const user = await userController.read({ email: userData.email })
    if (user.length) throw { status: 400, message: "user already exists" };
    return userController.create(userData)
}

const createToken = (user) => {
    const token = jwt.sign({user: user.id}, SECRET, { expiresIn: "1h" })
    return token
}

const login = async (userData) => {
    const user = await userController.read({userName: userData.userName}, "+password")
    if(!user.length)throw{status: 400 , message : "user not found"}
    console.log(user);
    if(user[0].password != userData.password)throw{status: 400 , message: "incorrect password"}
    return user
}


module.exports = { register, createToken, login }
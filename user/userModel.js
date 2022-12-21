const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        requierd : true
    },
    password: {
        type: String,
        requierd : true,
        select : false
    },
    userName:{
        type: String,
        requierd : true
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel
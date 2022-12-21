require("dotenv").config()
const express = require("express"),
cors = require("cors"),
app = express(),
userRoute = require("./user/userRoute"),
PORT = process.env.PORT;

app.use(cors())
app.use(express.json())

app.use("/user", userRoute);

app.listen(PORT, ()=> console.log(`server is runing on port ${PORT}`))

require("./db").connect()

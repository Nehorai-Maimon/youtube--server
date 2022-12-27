require("dotenv").config()
const express = require("express"),
    app = express(),
    cors = require("cors"),
    PORT = process.env.PORT;
    userRoute = require("./user/userRoute"),

app.use(cors())
app.use(express.json())

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`server is runing on port ${PORT}`))

require("./db").connect()

const express = require("express"),
    router = express.Router(),
    userLogic = require("./userLogic");

router.post("/", async (req, res) => {
    try {
        const newUser = await userLogic.register(req.body)
        const token = userLogic.createToken(newUser)
        res.send([{ token: token }, { user: user }])
    }
    catch (error) {
        res.status(400).send(error.message)
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await userLogic.login(req.body)
        const token = userLogic.createToken(user)
        res.send([{ token: token }, { user: user }])
    }
    catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router
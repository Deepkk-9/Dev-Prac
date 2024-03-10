const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const passport = require("passport")

const initializePassport = require("./passport-config")
initializePassport(passport)

const users = []

router.get("/register", (req, res) => {
    res.render("register.ejs")
})

router.get("/login", (req, res) => {
    res.render("login.ejs")
})

router.get("/", (req, res) => {
    res.render("index.ejs")
})


router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(req.body.password, salt)

        users.push({
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            password: hashPass
        })
        res.redirect("login")
    }
    catch (err) {
        console.log(err.message);
        res.redirect("register")
    }
    console.log(users);
})

module.exports = router
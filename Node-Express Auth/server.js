const express = require("express")
const app = express()

const port = 5000

app.set("view-engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.use("/api/auth", require("./routes/auth"))

app.listen(port)
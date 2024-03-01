const express = require("express")
const path = require("path")
const app = express()
const port = 5000

app.use(express.static(path.join(__dirname, "static")))
app.use("/", require(path.join(__dirname, "routes/blog.js")))

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})
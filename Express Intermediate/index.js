const express = require("express");
const path = require("path")
const app = express()
const { engine } = require('express-handlebars');
const port = 5000


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, "static")))
app.use("/", require(path.join(__dirname, "routes/blog.js")))

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})
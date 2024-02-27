const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

const userRouter = require('./routes/user')

app.use('/users', userRouter)


app.listen(3000)
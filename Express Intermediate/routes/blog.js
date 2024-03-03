const express = require("express")
const router = express.Router()
const path = require("path")
const blogs = require("../data/blogs")


router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "../templates/index.html"))
    res.render('home')
})

router.get('/blogs', (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/BlogHome.html"))
})


router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.blogs.filter(e => {
        return e.slug == req.params.slug
    });
    console.log(myBlog);
    res.sendFile(path.join(__dirname, "../templates/BlogPost.html"))
})

module.exports = router
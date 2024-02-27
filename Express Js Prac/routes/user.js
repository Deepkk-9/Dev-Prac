const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send("User List")
    console.log(req.query.name);
})

router.get('/new', (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    const isValid = false

    if (isValid) {
        users.push(req.body.firstname)
        res.redirect(`/users/${users.length - 1}`)
    }
    else {
        res.render("users/new", { firstname: req.body.firstname })
    }

    console.log(req.body.firstname);
    res.send("User Created")

})



router.route('/:id').get((req, res) => {
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`)
}).put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
}).delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
})


const users = [{ name: "Deep" }, { name: "Kyle" }]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})



// router.get('/:id', (req, res) => {
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`Delete User With ID ${req.params.id}`)
// })

module.exports = router
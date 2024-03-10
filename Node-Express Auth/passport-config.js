const LocalStrategy = require("passport-local")


const initialize = (passport) => {
    passport.use(new LocalStrategy({ usenameField: "email" }))
}
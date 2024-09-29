const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./db");
const person = require("./models/person");





//passport middlware
passport.use(new LocalStrategy(async (USERNAME, PASSWORD, done) =>{
    try{
      console.log("Receive Credantials:", USERNAME, PASSWORD)
      const user = await person.findOne( {username: USERNAME});
      if(!user){
        return done(null, false, {massage: "incorrect username"})
      }
      const isPasswordMatch = await user.comparePassword(PASSWORD); 
      if(isPasswordMatch)
        return done(null, user)
      else
      return done(null, false, {massage: "incorrect username"})
      }catch(err){
        return done(err)
    }
  }))

  module.exports = passport;
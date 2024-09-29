const express = require('express')
const app = express()

const db = require("./db");
const menuItem = require("./models/menuItem");
require("dotenv").config();
const passport = require("./auth");


const bodyParser = require("body-parser");
const MenuItem = require('./models/menuItem');
//const person = require('./models/person');
app.use(bodyParser.json());
//menu store
const port =process.env.port || 3000;


//middleware function
const logRequest = (req, res, next)=>{
  console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
  next();
}

//password middleware


app.use(logRequest);

app.use(passport.initialize());
const passportMiddleware = passport.authenticate("local",{session:false});


const personRoute = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuRoutes");





app.use("/person", passportMiddleware, personRoute);
app.use("/menu",  menuItemRoutes);





app.get('/', function (req, res) {
  res.send('what can i help ?');
})

app.listen(port, console.log("server is ready on port 3000"));
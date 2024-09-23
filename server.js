const express = require('express')
const app = express()
const db = require("./db")
const person = require("./models/person");
const menuItem = require("./models/menuItem");

const bodyParser = require("body-parser");
const MenuItem = require('./models/menuItem');
//const person = require('./models/person');
app.use(bodyParser.json());
//menu store


const personRoute = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuRoutes");





app.use("/person", personRoute);
app.use("/menu", menuItemRoutes);





app.get('/', function (req, res) {
  res.send('what can i help ?');
})

app.listen(3000, console.log("server is ready on port 3000"));
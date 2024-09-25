const mongoose = require('mongoose');
require("dotenv").config();



const mongoUrl =process.env.MONGODB_URL_LOCAL;
 //const  mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl);


const db = mongoose.connection;

db.on("connected", () =>{
 console.log("database connected");
})

db.on("error", () =>{
    console.log("somthing error happend");
   })

   db.on("disconnected", () =>{
    console.log("database disconnected");
   })
   
//export db

module.exports = db;
const mongoose = require('mongoose');



const mongoUrl ='mongodb://127.0.0.1:27017/hotel';


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
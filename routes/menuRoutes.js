const express = require("express");
const router = express.Router();
 const menuItem = require("./../models/menuItem");


router.post("/", async(req, res) =>{
    try{
    const data = req.body;
      const newMenu = new menuItem(data);
      const responce = await newMenu.save();
      console.log("menu save");
      res.status(200).json(responce);
    }catch(err){
      console.log("menu not save");
      res.status(500).json({err:"internal server problrm"});
  
    }
  });
  // route create for show menu 
  router.get("/", async(req, res) =>{
    try{
      const data = await menuItem.find()
       console.log("data fatched");
       res.status(200).json(data);
  
    }catch(err){
      console.log("data not fatched");
      res.status(500).json({err: "somthing is internal server issue"});
    }
  })
  //route for variable pass 
  router.get("/:taste", async(req, res) =>{
    try{
     const taste = req.params.taste ;//Extract the workType from url
     if(taste =="sweet" || taste =="spicy"  || taste =="sour" ){
        const responce = await menuItem.find({taste:taste});
        console.log("taste url accesd");
        res.status(200).json(responce);
        
     }else{
         console.log("this url doesnot exist");
         res.json("invalid url");
     }
    }catch(err){
      console.log("taste url not accesd");
         res.status(500).json({err: "somthing internal server error"});
    }
  })

  module.exports = router;
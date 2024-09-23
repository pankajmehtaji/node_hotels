try{
    
}

catch(err){
    console.log("data not save");
   res.status(500).json({err: "internal server problem"});
  
   }
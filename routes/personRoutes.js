const express = require("express");
const router = express.Router();
const person = require("./../models/person")


//data store in databases
router.post("/", async(req, res) =>{
    try{
     const data= req.body;
   
    const newPerson = new person(data);
    //newPerson.name = data.name;
     //newPerson.age = data.age;
    // newPerson.work = data.work;
     //newPerson.email = data.email;
     //newPerson.address = data.address;
     //console.log(req.body.name);
    const responce = await newPerson.save();
    console.log("data successfully save");
    res.status(200).json(responce);
    }catch(err){
     console.log("data not save");
      res.status(500).json({err: "internal server problem"});
    }
    
   })
   
   router.get("/", async(req, res) => {
   try{
   
     const data = await person.find();
     console.log("data factched");
     res.status(200).json(data);
   }catch(err){
     console.log("data not save");
     res.status(500).json({err: "internal server problem"});
   }
   
   })
   
   //pass variable url
   router.get("/:workType", async(req, res) =>{
     try{
      const workType = req.params.workType ;//Extract the workType from url
      if(workType =="chef" || workType =="manager" || workType =="waiter"){
         const responce = await person.find({work:workType});
         console.log("workType url accesd");
         res.status(200).json(responce);
         
      }else{
          console.log("this url doesnot exist");
          res.json("invalid url");
      }
     }catch(err){
       console.log("workType url not accesd");
          res.status(500).json({err: "somthing internal server error"});
     }
   })

   router.put('/:id', async (req, res) => {
    try {
    const personId = req.params.id; // Extract the person's ID
    //from the URL parameter
    const updatedPersonData = req.body; // Updated data for the
    person
    // Assuming you have a Person model
    const updatedPerson = await person.findByIdAndUpdate(personId, updatedPersonData, {
    new: true, // Return the updated document
    runValidators: true, // Run Mongoose validation
   });
    if (!updatedPerson) {
    return res.status(404).json({ error: 'Person not found'
    });
    }
    // Send the updated person data as a JSON response
    res.json(updatedPerson);
    } catch (error) {
    console.error('Error updating person:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    });


   module.exports = router;

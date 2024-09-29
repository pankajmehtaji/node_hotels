const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work:{
        type:String,
        enum: ["chef", "waiter", "manager"],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        typr:String,

    },
    salary:{
    type:Number,
    requred:true
    },
    username:{
        required:true,
        type:String
    },
    password:{
        type:String,
        required:true
    }
});

//hashing password
      personSchema.pre("save", async function(next){
        const Person = this;
        
        //hash the password only if it hasbeen modifies (or is new)
        if(!Person.isModified("password")) {
            
            return next()
        }
            try{
        //hash password generation
        const salt = await bcrypt.genSalt(10);
        //hash password
        const hashPassword = await bcrypt.hash(Person.password, salt);
        Person.password = hashPassword;
        next();
    }catch(err){
       return next(err);
    }
});

personSchema.methods.comparePassword = async function(candidatePassword){
   try{
     //use bcrypt to compare the provided password whit the hash password
     const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
   }catch(err){
    throw (err);
   }

}

const person = mongoose.model("person", personSchema);
module.exports= person;
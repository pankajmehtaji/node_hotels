const mongoose = require("mongoose");


const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        requred:true
    },
      taste:{
        type:String,
        enum:["sweet","spicy", "sour"],
        requred:true
    },
    is_drink: {
        type:Boolean,
        Default:false
    },
    ingredients: {
        type: [String],
        default: [],
        },
        num_sales: {
        type: Number,
        default: 0,
        }
        });
       
        const MenuItem = mongoose.model('MenuItem', menuItemSchema);
        module.exports = MenuItem;

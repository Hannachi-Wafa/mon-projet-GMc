const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
   
    title:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: String,
    },
    category_id:{
        type:mongoose.Types.ObjectId,
        ref:'Category'
    },
   

    qteStock:{
        type: Number,
    
    },
    checked:{
        type: Boolean,
        default: false
    },
    etat: {
        type: String,
        enum: ["en stock", "hors stock"],
        default: "en stock",
      }
})


module.exports = mongoose.model("Products", productSchema)
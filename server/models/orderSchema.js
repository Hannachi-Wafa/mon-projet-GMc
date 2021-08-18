const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
        email: {
          type: String,
         
      },
      user_id:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
        nom: {
          type: String,
        
      },
        prénom: {
          type: String,
        
      },
        address: {
          type: String,
         
      },
        telephone:{
          type: Number,
      },
        total:{
          type: Number,
      },
        cartItems: [
          {
            _id: String,
            title: String,
            price: Number,
            qty: Number,

          },
          
        ],
      },
      {
        timestamps: true,
      }
    )
    module.exports = mongoose.model("Order", orderSchema)
  
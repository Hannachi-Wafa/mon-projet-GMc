const mongoose = require('mongoose')

const orderResSchema = new mongoose.Schema({
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
      bookings: {type: mongoose.Types.ObjectId, ref: 'Booking'},

        cartrItems: [
          {
            _id: String,
            nbrPersonne: Number,
            prix: Number,
            title: String,
            //dateReserver:Date,
},
   
        ],
      },
      {
        timestamps: true,
      }
    )
    module.exports = mongoose.model("Orderres", orderResSchema)
  
 const mongoose = require('mongoose')


const bookingSchema =  mongoose.Schema({

    user_id:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },

    theme_id:{
        type:mongoose.Types.ObjectId,
        ref:'theme'
    },
    
    dateReserver: {type: Date},

})


module.exports = mongoose.model("Booking", bookingSchema) 
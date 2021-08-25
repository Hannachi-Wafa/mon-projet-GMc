const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const userSchema=new Schema({
    fullname:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    role: {
        type: Number,
        default: 0
    },
    /* bookings: [{type: mongoose.Types.ObjectId, ref: 'Booking'}] */

                
            

})

module.exports=mongoose.model('user',userSchema)
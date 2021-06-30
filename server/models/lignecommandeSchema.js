const mongoose = require('mongoose')


const lignecommandeSchema = new mongoose.Schema({
   
   quantite:{
        type:Number,
        required: true
    },
    sous_total:{
        type: Number,
        required: true
    },
    product_id:{
        type:mongoose.Types.ObjectId,
        ref:'Products'
    },
    numero: { 
        type: Number },

    commande_id: { 
        type: mongoose.Types.ObjectId,
        ref: "commande" },

})


module.exports = mongoose.model("lignecommande", lignecommandeSchema)
const lignecommande = require('../models/lignecommandeSchema')
const Products = require('../models/productSchema')
const commande = require('../models/commandeSchema')

exports.getligneC=async(req,res)=>{
    try {
        const ligneC= await lignecommande.find().populate('product_id').populate('commande_id')
        res.status(200).json(ligneC)
        } catch (error) {
        res.status(500).json({error:`something went wrong:${error}`}) 
        
        }   
}


exports.createligneC = async (req, res) => {
    try {
        const {quantite ,sous_total,product_id,commande_id} = req.body;
       
        const newligneC = new lignecommande({
            quantite,sous_total,product_id})
            const ligneC=await newligneC.save();

            Products.findByIdAndUpdate(product_id, {$inc:{qteStock:-quantite} }).then(() => {})
            .catch(() => {});
            commande.findByIdAndUpdate(commande_id, {$inc:{total:sous_total}}).then(() => {})
              .catch(() => {});

        res.status(200).json({ligneC})
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.deleteligneC = async (req, res) => {
    try {
        await lignecommande.findByIdAndDelete(req.params.id)
        res.json({ error: "Deleted a ligne de commande" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.updateligneC = async (req, res) => {
    try {
        const {quantite ,sous_total,product_id} = req.body;

        await lignecommande.findOneAndUpdate({ _id: req.params.id },  { quantite ,sous_total,product_id})

        res.json({ error: "Updated a ligne de commande" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

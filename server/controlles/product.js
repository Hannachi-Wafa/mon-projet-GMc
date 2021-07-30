const Products = require('../models/productSchema')


exports.getProduct=async(req,res)=>{
    try {
        const products= await Products.find().populate('category_id')
        res.status(200).json(products)
        } catch (error) {
        res.status(500).json({error:`something went wrong:${error}`}) 
        
        }   
}

exports.getProductbyid=async(req,res)=>{
    try {
        const products= await Products.findById({_id:req.params.id}).populate('category_id')
        res.status(200).json(products)
        } catch (error) {
        res.status(500).json({error:`something went wrong:${error}`}) 
        
        }   
}
/*exports.getProductbycategory=async(req,res)=>{
    try {
        const products= await Products.find({category:req.params.category}).populate('category_id')
        res.status(200).json(products)
        } catch (error) {
        res.status(500).json({error:`something went wrong:${error}`}) 
        
        }   
}*/
exports.createProduct = async (req,res) => {
    let myBody=JSON.parse(req.body.data)

    try {

        const {title, price, description,qteStock, category_id} = myBody;
        let path = req.protocol + "://" + req.hostname + ":" + 5000 + "/uploads/" + req.file.filename

        const newProduct = new Products({...myBody,images:path})
        const productt=await newProduct.save();

        res.status(200).json({productt})
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        await Products.findByIdAndDelete({ _id: req.params.id })
         res.json({ error: "Deleted a Product" })
         
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.updateProduct = async (req, res) => {
    let myBody=JSON.parse(req.body.data)

    try {

        const {title, price, description,qteStock, category_id}= myBody;
       let path = req.protocol + "://" + req.hostname + ":" + 5000 + "/uploads/" + req.file.filename

        await Products.findOneAndUpdate({ _id: req.params.id }, {...myBody,images:path})

        res.json({ error: "Updated a Product" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.updateimage = async (req, res) => {
    let myBody=JSON.parse(req.body.data)

    try {

        const {title, price, description,qteStock, category_id}= myBody;
       let path = req.protocol + "://" + req.hostname + ":" + 5000 + "/uploads/" + req.file.filename

        await Products.findOneAndUpdate({ _id: req.params.id }, {...myBody, images:path})

        res.json({ error: "Updated a Product" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
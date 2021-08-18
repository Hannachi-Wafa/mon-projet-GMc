const theme = require('../models/themeSchema')
const Products = require('../models/productSchema')


exports.gettheme= async(req, res) =>{
        try {
            const Theme = await theme.find().populate("category_id")

            res.json(Theme)
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }
    exports.getthemebyid=async(req,res)=>{
        try {
            const Theme= await theme.findById({_id:req.params.id}).populate('category_id')
            res.status(200).json(Theme)
            } catch (error) {
            res.status(500).json({error:`something went wrong:${error}`}) 
            
            }   
    }
/*exports.createtheme= async (req, res) =>{
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const {title,desc,prix,nbrPersonne,images,category_id} = req.body;
            if (!images) return res.status(400).json({ error: "No image upload" })

            const newtheme = new theme({title,desc,prix,nbrPersonne,images,category_id})

            await newtheme.save()
            res.json({error: "Created a theme"})
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }*/
    exports.createtheme = async (req,res) => {
        let myBody=JSON.parse(req.body.data)
    
        try {
    
            const {title,desc,prix,nbrPersonne,category_id} = myBody;
            let path = req.protocol + "://" + req.hostname + ":" + 5000 + "/uploads/" + req.file.filename
    
            const newtheme = new theme({...myBody,images:path})
            const themee=await newtheme.save();
    
            res.status(200).json({themee})
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }
    exports.deletetheme = async (req, res) => {
        try {
            await theme.findByIdAndDelete(req.params.id)
            res.json({ error: "Deleted a Product" })
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }
    exports.updatetheme= async(req, res) =>{
        try {
            const {title,desc,prix,nbrPersonne,images,category_id} = req.body;
            await theme.findOneAndUpdate({_id: req.params.id}, {title,desc,prix,nbrPersonne,images,category_id})

            res.json({error: "Updated a theme"})
        } catch (err) {
            return res.status(500).json({error: err.message})
        }
    }

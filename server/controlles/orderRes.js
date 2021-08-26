
const Orderres = require('../models/orderResSchema')


exports.createorder=async(req,res)=>{
    try {   
      console.log(req.body)
     /* if (
      !req.body.nom ||
      !req.body.prénom ||
      !req.body.telephone ||
      !req.body.email ||
      !req.body.address ||
      !req.body.total ||
      !req.body.cartItems
    ) {
      return res.send({ message: "Data is required." });
    }*/
    const {nom,prénom,email,telephone,address,total,cartrItems,bookings}=req.body;
    const neworder= new Orderres(req.body)

    const order = await neworder.save();
    res.send(order);
} catch (error) {
    res.status(500).json({error:`something went wrong:${error}`}) 
    
    }   
}
/*exports.createorder = async (req,res) => {

  try {

      const {nom, prénom, address,email, telephone, total, cartItems} = req.body;

      const neworder = new Order(req.body)
      const orderr=await neworder.save();

      res.status(200).json({orderr})
  } catch (err) {
      return res.status(500).json({ error: err.message })
  }
} */
exports.getorder=async(req,res)=>{
    try {    const orders = await Orderres.find({}).populate('user_id').populate('bookings');
    res.send(orders);
  }

 catch (error) {
    res.status(500).json({error:`something went wrong:${error}`}) 
    
    }  }
    
    exports.deleteorder = async (req, res) => {
        try {
        const order = await Orderres.findByIdAndDelete(req.params.id);
        res.send(order)}
        catch (error) {
            res.status(500).json({error:`something went wrong:${error}`}) 
            
            }  }
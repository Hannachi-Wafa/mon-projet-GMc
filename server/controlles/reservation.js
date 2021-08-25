const Reservation = require('../models/booking') 
const moment= require("moment")
exports.getreservation=async(req,res)=>{
    try {
        const ReservationList= await Reservation.find().populate('theme_id user_id')
        res.status(200).json(ReservationList)
        } catch (error) {
        res.status(500).json({message:`something went wrong:${error}`}) 
        
        }   
}


exports.createreservation = async (req, res) => {
    try {
        const {dateReserver,user_id,theme_id} = req.body;  

        const newreservation = new Reservation({
             dateReserver:moment(dateReserver),user_id,theme_id})
        const reservations=await newreservation.save();

        res.status(200).json({reservations})
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.deletereservation = async (req, res) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id)
        res.json({ error: "Deleted a reservation" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}
exports.updatereservation = async (req, res) => {
    try {
        const {dateReservation,heure,prix_theme,user_id,theme_id} = req.body;

        await Reservation.findOneAndUpdate({ _id: req.params.id },  {dateReservation,heure,prix_theme,user_id,theme_id})

        res.json({ error: "Updated a reservation" })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

exports.checkAvailability =async(req,res)=>{
    try{
        console.log(req.query)
        const reservationDate= req.query.date
        const theme = req.query.theme
        const reserve = await Reservation.find({theme_id:theme})
        
       const result= reserve.filter(elm=>moment(elm.dateReserver).isSame(moment(reservationDate),'day'))
       if(!result.length)
        res.json('available')
    else
        res.status(401).json('not available')
    }
    catch(err){
        return res.status(500).json({ error: err.message })

    }
}
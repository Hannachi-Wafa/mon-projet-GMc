const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()

const mongoose = require('mongoose');
//routes
app.use('/user', require('./routes/user'))
app.use('/category', require('./routes/category'))
app.use('/product', require('./routes/product'))
app.use('/theme', require('./routes/theme'))
app.use('/lignecommande', require('./routes/lignecommande'))
app.use('/commande', require('./routes/commande'))
app.use('/reservation', require('./routes/reservation'))



const PORT= process.env.PORT||5000;

//mongoose connect
mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true,
    useUnifiedTopology: true})
.then(()=>
app.listen(PORT, (err)=>(err ? console.log(err): console.log('server is running on port',PORT)))
).catch((err)=>console.log(err))

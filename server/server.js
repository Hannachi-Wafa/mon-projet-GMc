const express = require('express')


const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config()

const mongoose = require('mongoose');



//routes
app.use('/user', require('./routes/user'))
app.use('/category', require('./routes/category'))
app.use('/product', require('./routes/product'))
app.use('/theme', require('./routes/theme'))
app.use('/order', require('./routes/order'))


app.use('/reservation', require('./routes/reservation'))
app.use('/img', require('./routes/uploade'))

app.use('/uploads',express.static(__dirname+"/uploads"))
//************* */ */





const PORT= process.env.PORT||5000;

//mongoose connect
mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
useCreateIndex:true})
.then(()=>
app.listen(PORT, (err)=>(err ? console.log(err): console.log('server is running on port',PORT)))
).catch((err)=>console.log(err))

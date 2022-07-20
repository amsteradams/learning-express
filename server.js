import express from 'express' //import express
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
dotenv.config()

const PORT = process.env.PORT || 3000 

const app = express() //creation du app

app.use(express.json())

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false
}) 

app.use(routes)

app.listen(PORT, () => {
    console.log("server lancé sur le port " + PORT)
})